export function GradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[60vh] w-[60vh] rounded-full bg-gradient-to-br from-indigo-200 via-lime-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0" />
      <div className="absolute top-28 left-1/4 h-[35vh] w-[45vh] rounded-full bg-gradient-to-b from-orange-300 via-amber-200 to-rose-100 opacity-60 blur-3xl dark:h-[28vh] dark:from-orange-600 dark:via-amber-500 dark:to-rose-400 dark:opacity-60" />
      <div className="absolute right-10 bottom-40 h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr from-fuchsia-300 via-orange-300 to-rose-200 opacity-40 blur-3xl dark:opacity-0" />
    </div>
  )
}
