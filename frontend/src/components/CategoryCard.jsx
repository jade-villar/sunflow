import HabitCard from "./HabitCard";

const CategoryCard = ({ habits, categoryName }) => {
  const categoryHabits = habits?.data?.filter(
    (habit) => habit.category.name === categoryName,
  );

  // const categoryClass = categoryHabits[0]?.category?.name?.toLowerCase().replaceAll(" ", "-");

  if (categoryHabits?.length > 0) {
    return (
      <div className="break-inside-avoid mb-6 flex flex-col gap-4 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-around-sm hover:shadow-around-md transition">
        <div className="flex gap-3 items-center">
          <span className="text-xl p-2 bg-slate-800 rounded-lg">
            {categoryHabits[0].category.emoji}
          </span>
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            {categoryName}
          </span>
        </div>
        <div className="flex flex-col">
          {categoryHabits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </div>
      </div>
    );
  }
};

export default CategoryCard;
