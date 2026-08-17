const inputClassName =
  'w-full rounded-xl border border-zinc-300/70 bg-white/70 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-assnture focus:ring-2 focus:ring-assnture/20 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:placeholder:text-neutral-500'

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 scroll-mt-8 py-16 sm:py-20 lg:py-28 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/75 shadow-xl shadow-zinc-950/5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.035] dark:shadow-black/20">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-between border-b border-zinc-200/80 p-7 sm:p-10 lg:border-r lg:border-b-0 lg:p-12 dark:border-white/10">
              <div>
                <p className="mb-4 text-sm font-semibold tracking-widest text-assnture uppercase">
                  Get in touch
                </p>
                <h2 className="max-w-md text-3xl leading-tight font-medium text-gray-900 sm:text-5xl dark:text-neutral-100">
                  Let’s discuss what you’re building.
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-gray-600 dark:text-neutral-400">
                  Tell us about your capital markets requirements and our team will follow up with the right expertise.
                </p>
              </div>

              <a
                href="mailto:hello@assnture.com"
                className="mt-10 text-sm font-medium text-gray-800 transition-colors hover:text-assnture dark:text-neutral-200 dark:hover:text-assnture"
              >
                info@assnture.com
              </a>
            </div>

            <form
              action="mailto:info@assnture.com"
              method="post"
              encType="text/plain"
              className="grid gap-5 p-7 sm:grid-cols-2 sm:p-10 lg:p-12"
            >
              <label className="grid gap-2 text-sm font-medium text-gray-700 dark:text-neutral-300">
                First name
                <input className={inputClassName} type="text" name="firstName" autoComplete="given-name" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-gray-700 dark:text-neutral-300">
                Last name
                <input className={inputClassName} type="text" name="lastName" autoComplete="family-name" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-gray-700 dark:text-neutral-300">
                Work email
                <input className={inputClassName} type="email" name="email" autoComplete="email" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-gray-700 dark:text-neutral-300">
                Company
                <input className={inputClassName} type="text" name="company" autoComplete="organization" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-gray-700 sm:col-span-2 dark:text-neutral-300">
                How can we help?
                <textarea className={`${inputClassName} min-h-36 resize-y`} name="message" required />
              </label>
              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-relaxed text-gray-500 dark:text-neutral-500">
                  By submitting, you agree to be contacted about your enquiry.
                </p>
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-assnture dark:hover:bg-assnture-hover"
                >
                  Submit enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
