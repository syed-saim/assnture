import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { shariahProducts } from '../data/shariahProducts'

const fieldClassName =
  'w-full rounded-xl border border-zinc-300/70 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-assnture focus:ring-2 focus:ring-assnture/20 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100'

function formatUsd(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value >= 1000 ? 0 : 2,
  }).format(value)
}

export function ShariahCalculator() {
  const [productId, setProductId] = useState(shariahProducts[0].id)
  const product =
    shariahProducts.find((item) => item.id === productId) ?? shariahProducts[0]

  const [tokens, setTokens] = useState(100)
  const [tokenPrice, setTokenPrice] = useState(product.tokenPrice)
  const [profitRate, setProfitRate] = useState(product.defaultProfitRate)
  const [tenorYears, setTenorYears] = useState(2)

  useEffect(() => {
    setTokenPrice(product.tokenPrice)
    setProfitRate(product.defaultProfitRate)
  }, [product])

  const results = useMemo(() => {
    const investment = Math.max(tokens, 0) * Math.max(tokenPrice, 0)
    const rate = Math.max(profitRate, 0) / 100
    const years = Math.max(tenorYears, 0)

    const expectedProfit =
      product.compounding === 'periodic'
        ? investment * (Math.pow(1 + rate, years) - 1)
        : investment * rate * years

    const maturityValue = investment + expectedProfit
    const profitPerToken = tokens > 0 ? expectedProfit / tokens : 0
    const annualized =
      years > 0 && investment > 0
        ? (Math.pow(maturityValue / investment, 1 / years) - 1) * 100
        : 0

    return {
      investment,
      expectedProfit,
      maturityValue,
      profitPerToken,
      annualized,
    }
  }, [tokens, tokenPrice, profitRate, tenorYears, product.compounding])

  return (
    <section id="platform" className="relative z-10 w-full overflow-hidden py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-300/70 bg-white/70 px-3 py-1 text-sm dark:border-white/20 dark:bg-white/10">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-gray-700 dark:text-neutral-300">
              Digital Capital Infrastructure
            </span>
          </div>
          <h2 className="text-3xl leading-tight font-medium text-gray-900 sm:text-4xl lg:text-5xl dark:text-neutral-100">
            Shariah product simulator
          </h2>
          <p className="mt-6 text-lg text-gray-700/80 dark:text-neutral-300/80">
            Model illustrative returns across tokenized Shariah-compliant
            structures — adjust product type, profit rate, tenor and token
            allocation.
          </p>
        </div>

        <motion.div
          className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 shadow-xl shadow-zinc-950/5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/20"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-zinc-200/80 p-6 sm:p-8 lg:border-r lg:border-b-0 dark:border-white/10">
              <p className="mb-6 text-sm font-semibold tracking-widest text-assnture uppercase">
                Simulator inputs
              </p>

              <div className="space-y-5">
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Shariah product
                  </span>
                  <select
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    className={fieldClassName}
                  >
                    {shariahProducts.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} · {item.structure}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="rounded-2xl border border-zinc-200/70 bg-zinc-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                  <p className="text-sm font-medium text-gray-900 dark:text-neutral-100">
                    {product.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-neutral-400">
                    {product.description}
                  </p>
                  <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-neutral-500">
                    {product.aaofiNote}
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Number of tokens
                    </span>
                    <input
                      type="number"
                      min={1}
                      step={1}
                      value={tokens}
                      onChange={(e) => setTokens(Number(e.target.value) || 0)}
                      className={fieldClassName}
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Token price (USD)
                    </span>
                    <input
                      type="number"
                      min={1}
                      step={1}
                      value={tokenPrice}
                      onChange={(e) =>
                        setTokenPrice(Number(e.target.value) || 0)
                      }
                      className={fieldClassName}
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Expected profit rate (% p.a.)
                    </span>
                    <input
                      type="number"
                      min={product.minRate}
                      max={product.maxRate}
                      step={0.1}
                      value={profitRate}
                      onChange={(e) =>
                        setProfitRate(Number(e.target.value) || 0)
                      }
                      className={fieldClassName}
                    />
                    <span className="block text-xs text-gray-500 dark:text-neutral-500">
                      Typical range {product.minRate}% – {product.maxRate}%
                    </span>
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Tenor (years)
                    </span>
                    <input
                      type="number"
                      min={0.5}
                      max={10}
                      step={0.5}
                      value={tenorYears}
                      onChange={(e) =>
                        setTenorYears(Number(e.target.value) || 0)
                      }
                      className={fieldClassName}
                    />
                  </label>
                </div>

                <label className="block space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-800 dark:text-neutral-200">
                      Profit rate slider
                    </span>
                    <span className="font-semibold text-assnture">
                      {profitRate.toFixed(1)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={product.minRate}
                    max={product.maxRate}
                    step={0.1}
                    value={profitRate}
                    onChange={(e) => setProfitRate(Number(e.target.value))}
                    className="w-full accent-assnture"
                  />
                </label>
              </div>
            </div>

            <div className="bg-neutral-950 p-6 text-white sm:p-8 dark:bg-assnture">
              <p className="mb-6 text-sm font-semibold tracking-widest text-orange-300 uppercase dark:text-white/70">
                Illustrative outcome
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-sm text-white/70">Capital committed</p>
                  <p className="mt-1 text-3xl font-medium sm:text-4xl">
                    {formatUsd(results.investment)}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs tracking-wide text-white/65 uppercase">
                      Expected profit
                    </p>
                    <p className="mt-2 text-2xl font-medium">
                      {formatUsd(results.expectedProfit)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs tracking-wide text-white/65 uppercase">
                      Value at maturity
                    </p>
                    <p className="mt-2 text-2xl font-medium">
                      {formatUsd(results.maturityValue)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs tracking-wide text-white/65 uppercase">
                      Profit / token
                    </p>
                    <p className="mt-2 text-2xl font-medium">
                      {formatUsd(results.profitPerToken)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs tracking-wide text-white/65 uppercase">
                      Annualized return
                    </p>
                    <p className="mt-2 text-2xl font-medium">
                      {results.annualized.toFixed(2)}%
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/15 bg-black/20 p-4 text-sm leading-6 text-white/80">
                  <p>
                    <span className="font-medium text-white">Structure:</span>{' '}
                    {product.structure}
                  </p>
                  <p className="mt-2">
                    <span className="font-medium text-white">Method:</span>{' '}
                    {product.compounding === 'periodic'
                      ? 'Periodic profit reinvestment (illustrative)'
                      : 'Simple profit accrual over tenor'}
                  </p>
                  <p className="mt-2">
                    <span className="font-medium text-white">Tokens:</span>{' '}
                    {tokens.toLocaleString()} × {formatUsd(tokenPrice)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="max-w-3xl text-xs leading-5 text-gray-500 dark:text-neutral-500">
          This simulator is for educational illustration only. It does not
          constitute an offer, solicitation, or investment advice. Actual
          Shariah structures, profit distributions and capital outcomes depend
          on product documentation, underlying assets and Shariah board
          approvals.
        </p>
      </div>
    </section>
  )
}
