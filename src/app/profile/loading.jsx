import { Skeleton } from "../../components/ui/skeleton";

const ProfileSkeleton = () => {
  return (
    <section className="min-h-screen bg-background pt-20 pb-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">

        {/* Profile Card */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border bg-card shadow-sm">

          {/* Banner */}
          <Skeleton className="h-24 sm:h-32 w-full rounded-none" />

          <div className="px-4 sm:px-8 pb-5 sm:pb-7">
            <div className="flex flex-row items-end justify-between gap-3 -mt-9 sm:-mt-12 mb-4 sm:mb-5">

              {/* Avatar */}
              <Skeleton className="w-18 h-18 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl ring-2 sm:ring-4 ring-background shrink-0" />

              {/* Edit Button — always visible, adapts size */}
              <Skeleton className="h-9 sm:h-10 w-28 sm:w-36 rounded-xl" />
            </div>

            {/* Name + Email */}
            <div className="space-y-2 sm:space-y-3">
              <Skeleton className="h-6 sm:h-8 w-40 sm:w-52 rounded-lg" />
              <Skeleton className="h-3.5 sm:h-4 w-56 sm:w-72 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

          {/* Account Info */}
          <div className="rounded-xl sm:rounded-2xl border bg-card shadow-sm p-4 sm:p-6 space-y-4 sm:space-y-5">
            <Skeleton className="h-3.5 sm:h-4 w-24 sm:w-28 rounded-md" />

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl shrink-0" />
                <div className="space-y-1.5 sm:space-y-2 flex-1 min-w-0">
                  <Skeleton className="h-3 w-14 sm:w-16 rounded-md" />
                  <Skeleton className="h-3.5 sm:h-4 w-36 sm:w-44 rounded-md" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl shrink-0" />
                <div className="space-y-1.5 sm:space-y-2 flex-1 min-w-0">
                  <Skeleton className="h-3 w-16 sm:w-20 rounded-md" />
                  <Skeleton className="h-3.5 sm:h-4 w-24 sm:w-28 rounded-md" />
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="rounded-xl sm:rounded-2xl border bg-card shadow-sm p-4 sm:p-6 space-y-4 sm:space-y-5">
            <Skeleton className="h-3.5 sm:h-4 w-20 sm:w-24 rounded-md" />

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl shrink-0" />
                <div className="space-y-1.5 sm:space-y-2 flex-1 min-w-0">
                  <Skeleton className="h-3 w-20 sm:w-24 rounded-md" />
                  <Skeleton className="h-3.5 sm:h-4 w-32 sm:w-40 rounded-md" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl shrink-0" />
                <div className="space-y-1.5 sm:space-y-2 flex-1 min-w-0">
                  <Skeleton className="h-3 w-20 sm:w-24 rounded-md" />
                  <Skeleton className="h-3.5 sm:h-4 w-28 sm:w-36 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfileSkeleton;