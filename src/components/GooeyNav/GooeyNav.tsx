import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react'

export interface GooeyNavItem {
  label: string
  href: string
}

export interface GooeyNavProps {
  items: GooeyNavItem[]
  theme?: 'light' | 'dark'
  animationTime?: number
  particleCount?: number
  particleDistances?: [number, number]
  particleR?: number
  timeVariance?: number
  colors?: number[]
  initialActiveIndex?: number
  activeIndex?: number
  onItemClick?: (item: GooeyNavItem, index: number, event: MouseEvent) => void
}

const GooeyNav = ({
  items,
  theme = 'dark',
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  activeIndex: controlledIndex,
  onItemClick,
}: GooeyNavProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLUListElement>(null)
  const filterRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [internalIndex, setInternalIndex] = useState(initialActiveIndex)
  const activeIndex = controlledIndex ?? internalIndex

  const noise = (n = 1) => n / 2 - Math.random() * n

  const getXY = (
    distance: number,
    pointIndex: number,
    totalPoints: number,
  ): [number, number] => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180)
    return [distance * Math.cos(angle), distance * Math.sin(angle)]
  }

  const createParticle = (
    i: number,
    t: number,
    d: [number, number],
    r: number,
  ) => {
    const rotate = noise(r / 10)
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    }
  }

  const makeParticles = (element: HTMLElement) => {
    const d = particleDistances
    const r = particleR
    const bubbleTime = animationTime * 2 + timeVariance
    element.style.setProperty('--time', `${bubbleTime}ms`)

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2)
      const p = createParticle(i, t, d, r)
      element.classList.remove('active')

      setTimeout(() => {
        const particle = document.createElement('span')
        const point = document.createElement('span')
        particle.classList.add('gooey-particle')
        particle.style.setProperty('--start-x', `${p.start[0]}px`)
        particle.style.setProperty('--start-y', `${p.start[1]}px`)
        particle.style.setProperty('--end-x', `${p.end[0]}px`)
        particle.style.setProperty('--end-y', `${p.end[1]}px`)
        particle.style.setProperty('--time', `${p.time}ms`)
        particle.style.setProperty('--scale', `${p.scale}`)
        particle.style.setProperty('--color', `var(--gooey-color-${p.color})`)
        particle.style.setProperty('--rotate', `${p.rotate}deg`)
        point.classList.add('gooey-point')
        particle.appendChild(point)
        element.appendChild(particle)

        requestAnimationFrame(() => {
          element.classList.add('active')
        })

        setTimeout(() => {
          try {
            element.removeChild(particle)
          } catch {
            /* ignore */
          }
        }, t)
      }, 30)
    }
  }

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const pos = element.getBoundingClientRect()
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    }
    Object.assign(filterRef.current.style, styles)
    Object.assign(textRef.current.style, styles)
    textRef.current.innerText = element.innerText
  }

  const activate = (liEl: HTMLElement, index: number) => {
    if (controlledIndex === undefined) setInternalIndex(index)
    updateEffectPosition(liEl)

    if (filterRef.current) {
      filterRef.current.classList.add('is-visible')
      filterRef.current
        .querySelectorAll('.gooey-particle')
        .forEach((p) => filterRef.current!.removeChild(p))
    }

    if (textRef.current) {
      textRef.current.classList.add('is-visible')
      textRef.current.classList.remove('active')
      void textRef.current.offsetWidth
      textRef.current.classList.add('active')
    }

    if (filterRef.current) makeParticles(filterRef.current)
  }

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    const liEl = e.currentTarget.parentElement as HTMLElement | null
    if (!liEl) return

    if (onItemClick) {
      e.preventDefault()
      onItemClick(items[index], index, e)
    }

    if (activeIndex === index) {
      updateEffectPosition(liEl)
      return
    }

    activate(liEl, index)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      e.currentTarget.click()
    }
  }

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return

    if (activeIndex < 0) {
      textRef.current?.classList.remove('active', 'is-visible')
      filterRef.current?.classList.remove('active', 'is-visible')
      return
    }

    const activeLi = navRef.current.querySelectorAll('li')[
      activeIndex
    ] as HTMLElement | undefined
    if (activeLi) {
      updateEffectPosition(activeLi)
      textRef.current?.classList.add('active', 'is-visible')
      filterRef.current?.classList.add('is-visible')
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[
        activeIndex
      ] as HTMLElement | undefined
      if (currentActiveLi) updateEffectPosition(currentActiveLi)
    })

    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [activeIndex, theme, items])

  return (
    <>
      <style>
        {`
          .gooey-nav {
            --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
            --gooey-color-1: #f07030;
            --gooey-color-2: #fb923c;
            --gooey-color-3: #fdba74;
            --gooey-color-4: #fff7ed;
          }

          .gooey-nav[data-theme='dark'] {
            --gooey-text: rgba(255, 255, 255, 0.88);
            --gooey-text-active: #111111;
            --gooey-pill: #ffffff;
            --gooey-effect-text: #ffffff;
            --gooey-effect-text-active: #111111;
            --gooey-shadow: 0 1px 1px hsl(205deg 30% 10% / 0.2);
          }

          .gooey-nav[data-theme='light'] {
            --gooey-text: rgba(24, 24, 27, 0.78);
            --gooey-text-active: #ffffff;
            --gooey-pill: #171717;
            --gooey-effect-text: rgba(24, 24, 27, 0.78);
            --gooey-effect-text-active: #ffffff;
            --gooey-shadow: none;
            --gooey-color-4: #171717;
          }

          .gooey-nav {
            overflow: visible;
          }

          .gooey-nav .gooey-effect {
            position: absolute;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
          }

          .gooey-nav .gooey-effect.is-visible {
            opacity: 1;
            visibility: visible;
          }

          .gooey-nav .gooey-effect.text {
            color: var(--gooey-effect-text);
            transition: color 0.3s ease;
            font-size: 0.875rem;
            font-weight: 500;
          }

          .gooey-nav .gooey-effect.text.active {
            color: var(--gooey-effect-text-active);
          }

          .gooey-nav .gooey-effect.filter {
            /* Keep particles only — no solid backdrop block */
            overflow: visible;
          }

          .gooey-nav .gooey-effect.filter::before {
            content: none;
          }

          .gooey-nav .gooey-effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: var(--gooey-pill);
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
          }

          .gooey-nav .gooey-effect.active::after {
            animation: gooey-pill 0.3s ease both;
          }

          @keyframes gooey-pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          .gooey-nav .gooey-particle,
          .gooey-nav .gooey-point {
            display: block;
            opacity: 0;
            width: 20px;
            height: 20px;
            border-radius: 9999px;
            transform-origin: center;
          }

          .gooey-nav .gooey-particle {
            --time: 5s;
            position: absolute;
            top: calc(50% - 8px);
            left: calc(50% - 8px);
            animation: gooey-particle calc(var(--time)) ease 1 -350ms;
          }

          .gooey-nav .gooey-point {
            background: var(--color);
            opacity: 1;
            animation: gooey-point calc(var(--time)) ease 1 -350ms;
          }

          @keyframes gooey-particle {
            0% {
              transform: rotate(0deg) translate(var(--start-x), var(--start-y));
              opacity: 1;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            70% {
              transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: rotate(calc(var(--rotate) * 0.66)) translate(var(--end-x), var(--end-y));
              opacity: 1;
            }
            100% {
              transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
              opacity: 1;
            }
          }

          @keyframes gooey-point {
            0% {
              transform: scale(0);
              opacity: 0;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            25% {
              transform: scale(calc(var(--scale) * 0.25));
            }
            38% {
              opacity: 1;
            }
            65% {
              transform: scale(var(--scale));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: scale(var(--scale));
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }

          .gooey-nav .gooey-item.active {
            color: var(--gooey-text-active);
            text-shadow: none;
          }

          .gooey-nav .gooey-item.active::after {
            opacity: 1;
            transform: scale(1);
          }

          .gooey-nav .gooey-item::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 9999px;
            background: var(--gooey-pill);
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: -1;
          }
        `}
      </style>

      <div className="gooey-nav" data-theme={theme}>
        <div className="relative" ref={containerRef}>
          <nav
            className="relative flex"
            style={{ transform: 'translate3d(0,0,0.01px)' }}
            aria-label="Primary"
          >
            <ul
              ref={navRef}
              className="relative z-[3] m-0 flex list-none gap-1 p-0 px-1 text-sm font-medium sm:gap-2"
              style={{
                color: 'var(--gooey-text)',
                textShadow: 'var(--gooey-shadow)',
              }}
            >
              {items.map((item, index) => (
                <li
                  key={item.label}
                  className={`gooey-item relative cursor-pointer rounded-full transition-[color,box-shadow] duration-300 ease-out ${
                    activeIndex === index ? 'active' : ''
                  }`}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, index)}
                    onKeyDown={handleKeyDown}
                    className="inline-block px-3.5 py-2 outline-none sm:px-4"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <span className="gooey-effect filter" ref={filterRef} />
          <span className="gooey-effect text" ref={textRef} />
        </div>
      </div>
    </>
  )
}

export default GooeyNav
