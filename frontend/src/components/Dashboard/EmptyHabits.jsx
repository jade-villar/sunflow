const EmptyHabits = ({ handleAdd }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-3 py-10 col-[1/2] md:col-[1/9] lg:col-[1/10] row-[3/4] md:row-[2/4]">
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
    </section>
  );
};

export default EmptyHabits;
