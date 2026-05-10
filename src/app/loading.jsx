import { Skeleton } from "../components/ui/skeleton";
import Wrapper from "../utils/Wrapper";

export default function GlobalLoading() {
  return (
    <main className="min-h-screen bg-primary/3 pb-16 sm:pb-20">

      {/* Hero skeleton */}
      <div className="bg-white border-b border-primary/10 py-10 sm:py-16">
        <Wrapper>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="space-y-3 sm:space-y-4">
              <Skeleton className="w-24 sm:w-32 h-5 sm:h-6 rounded-full" />
              <Skeleton className="w-full h-9 sm:h-12 rounded-xl" />
              <Skeleton className="w-4/5 h-9 sm:h-12 rounded-xl" />
              <Skeleton className="w-full h-4 sm:h-5 rounded" />
              <Skeleton className="w-3/4 h-4 sm:h-5 rounded" />
              <div className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2">
                <Skeleton className="w-full sm:w-36 h-11 rounded-xl" />
                <Skeleton className="w-full sm:w-36 h-11 rounded-xl" />
              </div>
            </div>
            <Skeleton className="w-full aspect-[4/3] rounded-2xl mt-2 lg:mt-0" />
          </div>
        </Wrapper>
      </div>

      {/* Sections */}
      <Wrapper>
        <div className="py-10 sm:py-16 space-y-10 sm:space-y-14">

          {/* Section header */}
          <div className="text-center space-y-2 sm:space-y-3">
            <Skeleton className="w-24 sm:w-28 h-6 sm:h-7 rounded-full mx-auto" />
            <Skeleton className="w-48 sm:w-64 h-8 sm:h-10 rounded-xl mx-auto" />
            <Skeleton className="w-64 sm:w-80 h-4 sm:h-5 rounded mx-auto" />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-primary/10 bg-white overflow-hidden shadow-sm">
                <Skeleton className="w-full h-44 sm:h-52 rounded-none" />
                <div className="p-4 sm:p-5 space-y-2.5 sm:space-y-3">
                  <Skeleton className="w-2/3 h-4 sm:h-5 rounded" />
                  <Skeleton className="w-full h-3.5 sm:h-4 rounded" />
                  <Skeleton className="w-1/2 h-3.5 sm:h-4 rounded" />
                  <div className="flex items-center justify-between pt-1 sm:pt-2">
                    <Skeleton className="w-20 sm:w-24 h-5 sm:h-6 rounded" />
                    <Skeleton className="w-16 sm:w-20 h-8 sm:h-9 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center space-y-2 sm:space-y-3">
              <Skeleton className="w-28 sm:w-32 h-6 sm:h-7 rounded-full mx-auto" />
              <Skeleton className="w-40 sm:w-48 h-8 sm:h-10 rounded-xl mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-primary/15 bg-white p-4 sm:p-6 space-y-2.5 sm:space-y-3">
                  <div className="flex items-start justify-between">
                    <Skeleton className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl" />
                    <Skeleton className="w-14 sm:w-16 h-5 sm:h-6 rounded-full" />
                  </div>
                  <Skeleton className="w-full h-4 sm:h-5 rounded" />
                  <Skeleton className="w-4/5 h-3.5 sm:h-4 rounded" />
                  <Skeleton className="w-3/5 h-3.5 sm:h-4 rounded" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </Wrapper>
    </main>
  );
}