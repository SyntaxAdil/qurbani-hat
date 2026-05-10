import { Skeleton } from "../ui/skeleton";

const ProfileSkeleton = () => {
  return (
    <section className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-5">
        
        {/* Profile Card */}
        <div className="relative overflow-hidden rounded-3xl border bg-card shadow-sm">
          
          {/* Banner */}
          <Skeleton className="h-32 w-full rounded-none" />

          <div className="px-8 pb-7">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12">
              
              {/* Avatar */}
              <Skeleton className="w-24 h-24 rounded-2xl ring-4 ring-background" />

              {/* Edit Button */}
              <Skeleton className="h-10 w-36 rounded-xl hidden md:block" />
            </div>

            {/* Name + Email */}
            <div className="mt-5 space-y-3">
              <Skeleton className="h-8 w-52 rounded-lg" />
              <Skeleton className="h-4 w-72 rounded-lg" />
            </div>

            {/* Mobile Button */}
            <Skeleton className="h-10 w-full rounded-xl mt-5 md:hidden" />
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Account Info */}
          <div className="rounded-2xl border bg-card shadow-sm p-6 space-y-5">
            <Skeleton className="h-4 w-28 rounded-md" />

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Skeleton className="h-10 w-10 rounded-xl shrink-0" />

                <div className="space-y-2 flex-1">
                  <Skeleton className="h-3 w-16 rounded-md" />
                  <Skeleton className="h-4 w-44 rounded-md" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Skeleton className="h-10 w-10 rounded-xl shrink-0" />

                <div className="space-y-2 flex-1">
                  <Skeleton className="h-3 w-20 rounded-md" />
                  <Skeleton className="h-4 w-28 rounded-md" />
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="rounded-2xl border bg-card shadow-sm p-6 space-y-5">
            <Skeleton className="h-4 w-24 rounded-md" />

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Skeleton className="h-10 w-10 rounded-xl shrink-0" />

                <div className="space-y-2 flex-1">
                  <Skeleton className="h-3 w-24 rounded-md" />
                  <Skeleton className="h-4 w-40 rounded-md" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Skeleton className="h-10 w-10 rounded-xl shrink-0" />

                <div className="space-y-2 flex-1">
                  <Skeleton className="h-3 w-24 rounded-md" />
                  <Skeleton className="h-4 w-36 rounded-md" />
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