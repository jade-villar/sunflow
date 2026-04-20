import { motion } from "motion/react";

const CategoryCardsSkeleton = () => {
  const categoryCards = Array.from({ length: 2 });
  const habitCards = Array.from({ length: 2 });

  return (
    <motion.div
      className="flex flex-col gap-4 md:gap-6"
      key="skeleton"
      exit={{ opacity: 0 }}
    >
      {categoryCards.map((_, i) => (
        // Category Card Skeleton
        <div
          key={i}
          className="flex flex-col gap-8 bg-white border border-slate-200 rounded-3xl px-6 py-7 md:px-7 md:py-8 shadow-around-sm hover:shadow-around-md"
        >
          <div className="flex gap-3 items-center">
            <span className="w-10 aspect-square bg-slate-800 rounded-lg animate-pulse"></span>
            <span className="h-4 w-30 bg-slate-300 rounded-sm animate-pulse"></span>
          </div>

          <div className="flex flex-col">
            {habitCards.map((_, j) => (
              // Habit Card Skeleton
              <div
                key={j}
                className="border-b border-slate-200 last:border-none pt-4 pb-4 first:pt-1 last:pb-1"
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="h-5 w-32 bg-slate-300 rounded-sm animate-pulse"></span>
                    <span className="h-4 w-20 bg-slate-300 rounded-sm animate-pulse"></span>
                  </div>
                  <div className="h-9 w-25 bg-slate-300 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default CategoryCardsSkeleton;
