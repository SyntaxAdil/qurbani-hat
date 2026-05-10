import { Skeleton } from "../components/ui/skeleton";
import Wrapper from "../utils/Wrapper";


export default function GlobalLoading() {
  return (
    <main className="min-h-screen bg-primary/3 pb-20">

      {/* Hero skeleton */}
      <div className="bg-white border-b border-primary/10 py-16">
        <Wrapper>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <Skeleton className="w-32 h-6 rounded-full" />
              <Skeleton className="w-full h-12 rounded-xl" />
              <Skeleton className="w-4/5 h-12 rounded-xl" />
              <Skeleton className="w-full h-5 rounded" />
              <Skeleton className="w-3/4 h-5 rounded" />
              <div className="flex gap-3 pt-2">
                <Skeleton className="w-36 h-11 rounded-xl" />
                <Skeleton className="w-36 h-11 rounded-xl" />
              </div>
            </div>
            <Skeleton className="w-full aspect-[4/3] rounded-2xl" />
          </div>
        </Wrapper>
      </div>

      {/* Section skeleton */}
      <Wrapper>
        <div className="py-16 space-y-14">

          {/* Section header */}
          <div className="text-center space-y-3">
            <Skeleton className="w-28 h-7 rounded-full mx-auto" />
            <Skeleton className="w-64 h-10 rounded-xl mx-auto" />
            <Skeleton className="w-80 h-5 rounded mx-auto" />
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-primary/10 bg-white overflow-hidden shadow-sm">
                <Skeleton className="w-full h-52" />
                <div className="p-5 space-y-3">
                  <Skeleton className="w-2/3 h-5 rounded" />
                  <Skeleton className="w-full h-4 rounded" />
                  <Skeleton className="w-1/2 h-4 rounded" />
                  <div className="flex items-center justify-between pt-2">
                    <Skeleton className="w-24 h-6 rounded" />
                    <Skeleton className="w-20 h-9 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips section */}
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <Skeleton className="w-32 h-7 rounded-full mx-auto" />
              <Skeleton className="w-48 h-10 rounded-xl mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-primary/15 bg-white p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <Skeleton className="w-12 h-12 rounded-xl" />
                    <Skeleton className="w-16 h-6 rounded-full" />
                  </div>
                  <Skeleton className="w-full h-5 rounded" />
                  <Skeleton className="w-4/5 h-4 rounded" />
                  <Skeleton className="w-3/5 h-4 rounded" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </Wrapper>
    </main>
  );
}