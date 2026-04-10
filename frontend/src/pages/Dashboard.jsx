import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import HabitCompletionCard from "../components/HabitCompletionCard";
import HabitModal from "../components/HabitModal";
import StreakCard from "../components/StreakCard";
import { useAuth } from "../context/AuthContext";
import { format } from "date-fns";
import { useHabit } from "../context/HabitContext";
import AuthLoading from "./AuthLoading";

const Dashboard = () => {
  const { user } = useAuth();
  const { habits, habitsLoading, getAllHabits } = useHabit();

  const today = format(new Date(), "EEEE, MMMM d");

  const [isOpen, setIsOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState(null);

  useEffect(() => {
    getAllHabits();
  }, [getAllHabits]);

  const handleAdd = () => {
    setEditingHabit(null);
    setIsOpen(true);
  };

  if (habitsLoading) {
    return <AuthLoading />;
  }

  return (
    <main className="min-h-screen px-4 py-30 text-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 items-start">
        {/* HEADER */}
        <section className="flex justify-between items-end gap-6 flex-wrap mt-4 mb-6 col-[1/2] md:col-[1/9] lg:col-[1/10] row-[1/2]">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase text-yellow-500 font-bold">
              {today}
            </div>
            <h2 className="text-4xl font-fraunces font-extrabold capitalize">
              Good Day, {user.data.user.name}!
            </h2>
            <p className="text-gray-600 text-sm">
              Keep growing your habits today
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm text-white font-semibold shadow-around-sm hover:shadow-around-md active:shadow-around-md bg-slate-900 hover:bg-slate-800 active:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer"
          >
            <span className="w-5 h-5 rounded-full bg-yellow-500">+</span>
            <span>Add Habit</span>
          </button>
        </section>

        {/* MAIN LIST */}
        <section className="flex flex-col gap-4 md:gap-6 col-[1/2] md:col-[1/9] lg:col-[1/10] row-[3/4] md:row-[2/3]">
          <CategoryCard habits={habits} categoryName="Health" />
          <CategoryCard habits={habits} categoryName="Mindfulness" />
          <CategoryCard habits={habits} categoryName="Productivity" />
          <CategoryCard habits={habits} categoryName="Learning" />
          <CategoryCard habits={habits} categoryName="Home & Household" />
          <CategoryCard habits={habits} categoryName="Social" />
          <CategoryCard habits={habits} categoryName="Spirituality" />
          <CategoryCard habits={habits} categoryName="Finances" />
        </section>

        {/* SIDEBAR */}
        <section className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 mb-6 md:sticky md:top-30 md:self-start col-[1/2] md:col-[9/13] lg:col-[10/13] row-[2/3] md:row-[1/4]">
          <StreakCard habits={habits} />
          <HabitCompletionCard habits={habits} />
        </section>
      </div>
      <HabitModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialData={editingHabit}
      />
    </main>
  );
};

export default Dashboard;
