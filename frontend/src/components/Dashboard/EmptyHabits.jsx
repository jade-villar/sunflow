const EmptyHabits = ({ handleAdd }) => {
  return (
    <>
      <img src="/icons/seedling.svg" className="w-8 aspect-square" />
      <h3 className="text-2xl font-fraunces font-bold">No Habits Yet</h3>
      <p className="text-slate-400 text-sm">
        Start building your routine by adding your first habit.
      </p>
      <button
        onClick={handleAdd}
        className="flex items-center gap-1.5 mt-2 px-5 py-2.5 text-sm font-semibold rounded-full shadow-around-sm shadow-yellow-200 text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 cursor-pointer hover:-translate-y-px active:translate-y-0 transition"
      >
        <span>+</span>
        <span>Add Habit</span>
      </button>
    </>
  );
};

export default EmptyHabits;
