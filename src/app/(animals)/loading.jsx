import { Skeleton } from "../../components/ui/skeleton";
import Wrapper from "../../utils/Wrapper";


const SkeletonRow = () => (
  <div className="flex items-center justify-between py-3 border-b border-primary/8 last:border-0">
    <div className="flex items-center gap-2">
      <Skeleton className="w-4 h-4 rounded" />
      <Skeleton className="w-16 h-4 rounded" />
    </div>
    <Skeleton className="w-24 h-4 rounded" />
  </div>
);

export default function AnimalDetailLoading() {
  return (
    <main className="min-h-screen bg-primary/3 pb-20 animate-pulse">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-primary/10">
        <Wrapper>
          <div className="flex items-center gap-2 py-3">
            <Skeleton className="w-8 h-4 rounded" />
            <Skeleton className="w-2 h-3 rounded" />
            <Skeleton className="w-14 h-4 rounded" />
            <Skeleton className="w-2 h-3 rounded" />
            <Skeleton className="w-32 h-4 rounded" />
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="py-8">
          <Skeleton className="w-36 h-5 rounded mb-6" />

          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* LEFT */}
            <div className="space-y-4">
              <Skeleton className="w-full aspect-[4/3] rounded-2xl" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="w-24 h-7 rounded-full" />
                ))}
              </div>
              <Skeleton className="w-36 h-4 rounded" />
            </div>

            {/* RIGHT */}
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <Skeleton className="w-56 h-9 rounded-lg" />
                  <Skeleton className="w-10 h-6 rounded-full" />
                </div>
                <Skeleton className="w-44 h-10 rounded-lg" />
                <div className="flex items-center gap-2">
                  <Skeleton className="w-10 h-0.5 rounded" />
                  <Skeleton className="w-1.5 h-1.5 rounded-full" />
                  <Skeleton className="w-10 h-0.5 rounded" />
                </div>
              </div>

              <div className="space-y-2">
                <Skeleton className="w-full h-4 rounded" />
                <Skeleton className="w-4/5 h-4 rounded" />
                <Skeleton className="w-3/5 h-4 rounded" />
              </div>

              <div className="rounded-2xl border border-primary/15 bg-white p-5 shadow-sm">
                <Skeleton className="w-28 h-4 rounded mb-4" />
                {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonRow key={i} />)}
              </div>

              <div className="space-y-3">
                <Skeleton className="w-full h-12 rounded-xl" />
                <Skeleton className="w-full h-12 rounded-xl" />
              </div>

              <Skeleton className="w-full h-14 rounded-xl" />
            </div>

          </div>
        </div>
      </Wrapper>
    </main>
  );
}