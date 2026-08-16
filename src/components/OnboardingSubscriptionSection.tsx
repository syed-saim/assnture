import ChromaGrid from './ChromaGrid/ChromaGrid'
import { onboardingSubscriptionSteps } from '../data/onboardingSubscription'

export function OnboardingSubscriptionSection() {
  return (
    <section className="relative z-10 border-t border-zinc-200/70 py-16 sm:py-24 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-assnture uppercase">
            Workflow
          </p>
          <h2 className="text-3xl leading-tight font-medium text-gray-900 sm:text-5xl dark:text-neutral-100">
            Onboarding & Subscription Process
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-neutral-400">
            All stages are subject to dual-control checks and hard document gates
            on the Optimus platform.
          </p>
        </div>

        <div className="min-h-[640px] rounded-3xl border border-zinc-200/70 bg-neutral-950/95 p-4 sm:p-6 dark:border-white/10">
          <ChromaGrid
            items={onboardingSubscriptionSteps}
            radius={280}
            className="py-2"
          />
        </div>
      </div>
    </section>
  )
}
