// Reusable skeleton loading components

export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  );
}

export function ReviewCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar skeleton */}
        <Skeleton className="w-12 h-12 rounded-full shrink-0" />
        <div className="flex-1">
          {/* Name skeleton */}
          <Skeleton className="h-5 w-32 mb-2" />
          {/* Stars skeleton */}
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="w-5 h-5 rounded" />
            ))}
          </div>
          {/* Date skeleton */}
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      {/* Comment lines skeleton */}
      <div className="space-y-2 mt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

export function TeamMemberCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-full">
      <div className="flex flex-col sm:flex-row p-4 sm:p-5 gap-4 h-full">
        {/* Image skeleton */}
        <Skeleton className="w-full sm:w-40 aspect-[3/4] sm:aspect-auto sm:h-full sm:min-h-[250px] rounded-2xl shrink-0" />
        
        {/* Content skeleton */}
        <div className="flex-1 flex flex-col py-1">
          {/* Name skeleton */}
          <Skeleton className="h-7 w-32 mb-2" />
          
          {/* Role skeleton */}
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#E8ECFF]">
            <Skeleton className="w-5 h-5 rounded-full" />
            <Skeleton className="h-5 w-40" />
          </div>
          
          {/* Qualifications skeleton */}
          <div className="flex-1 mb-3 space-y-2">
            <Skeleton className="h-3 w-20 mb-1.5" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-2">
                <Skeleton className="w-4 h-4 rounded-full mt-0.5" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
          
          {/* Button skeleton */}
          <Skeleton className="h-5 w-24" />
        </div>
      </div>
    </div>
  );
}

export function FAQItemSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden">
      {/* Question skeleton */}
      <Skeleton className="w-full h-16 rounded-lg" />
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero skeleton */}
      <Skeleton className="w-full h-[45vh] md:h-[55vh] lg:h-[75vh]" />
      
      {/* Content skeleton */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Title skeleton */}
          <Skeleton className="h-12 w-64 mx-auto" />
          
          {/* Grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-64 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ImageSkeleton({ aspectRatio = "aspect-square" }: { aspectRatio?: string }) {
  return (
    <Skeleton className={`w-full ${aspectRatio} rounded-2xl`} />
  );
}

