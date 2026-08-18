const Bar = ({ className = "" }: { className?: string }) => (
  <div className={`shimmer rounded-md ${className}`} />
);

export const SemesterOverviewSkeleton = () => (
  <div className="mb-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:grid-cols-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="space-y-3">
        <Bar className="h-3 w-20" />
        <Bar className="h-7 w-14" />
      </div>
    ))}
  </div>
);

export const CourseCardSkeleton = () => (
  <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
    <div className="flex items-start justify-between gap-3">
      <Bar className="h-5 w-24" />
      <Bar className="h-5 w-16 rounded-full" />
    </div>
    <Bar className="mt-4 h-4 w-4/5" />
    <Bar className="mt-2 h-4 w-3/5" />
    <div className="mt-5 grid grid-cols-3 gap-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <Bar key={i} className="h-12" />
      ))}
    </div>
    <Bar className="mt-5 h-9 w-full" />
  </div>
);

export const CourseGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
    {Array.from({ length: count }).map((_, i) => (
      <CourseCardSkeleton key={i} />
    ))}
  </div>
);
