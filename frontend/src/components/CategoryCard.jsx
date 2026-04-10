import HabitCard from "./HabitCard";

const CategoryCard = ({ habits, categoryName }) => {
  const categoryHabits = habits?.data?.filter(
    (habit) => habit.category.name === categoryName,
  );

  if (categoryHabits?.length > 0) {
    return (
      <div className="flex flex-col gap-8 bg-white border border-slate-200 rounded-3xl px-6 py-7 md:px-7 md:py-8 shadow-around-sm hover:shadow-around-md transition">
        <div className="flex gap-3 items-center">
          <span className="p-2 bg-slate-800 rounded-lg">
            <img
              src={`/icons/${categoryHabits[0].category.icon}.svg`}
              className="w-6 aspect-square"
            />
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
