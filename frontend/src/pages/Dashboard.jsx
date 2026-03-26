import { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import HabitCompletionCard from "../components/HabitCompletionCard";
import HabitModal from "../components/HabitModal";
import StreakCard from "../components/StreakCard";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState(null);

  const handleAdd = () => {
    setEditingHabit(null);
    setIsOpen(true);
  };

  const handleSubmit = (data) => {
    if (editingHabit) {
      console.log("Update habit:", data);
    } else {
      console.log("Add habit:", data);
    }
  };

  const habits = {
    status: "success",
    data: [
      {
        id: "8ec2a87a-0746-410a-9a31-2ad672add522",
        title: "test validation",
        description: "",
        frequency: "WEEKLY",
        category: {
          id: 7,
          name: "Finances",
          emoji: "💵",
        },
        streak: 0,
        completedToday: true,
        lastCompletedAt: null,
        createdAt: "2026-03-06T11:05:12.241Z",
        updatedAt: "2026-03-06T11:05:12.241Z",
      },
      {
        id: "8b4e02fd-4a60-4a86-86b1-34f9c3dd8775",
        title: "Wash dishes",
        description: "3x a day",
        frequency: "DAILY",
        category: {
          id: 8,
          name: "Spirituality",
          emoji: "🙏",
        },
        streak: 0,
        completedToday: false,
        lastCompletedAt: null,
        createdAt: "2026-03-04T15:58:02.411Z",
        updatedAt: "2026-03-04T15:58:02.411Z",
      },
      {
        id: "dc561e37-c67a-4b35-a547-1a5c941bf8dd",
        title: "Wash dishes",
        description: "3x a day",
        frequency: "DAILY",
        category: {
          id: 5,
          name: "Home & Household",
          emoji: "🏡",
        },
        streak: 267,
        completedToday: true,
        lastCompletedAt: null,
        createdAt: "2026-03-04T15:02:34.957Z",
        updatedAt: "2026-03-04T15:02:34.957Z",
      },
      {
        id: "d6e0b027-a97b-472e-a632-71c842f58899",
        title: "Learn Backend Development",
        description: "Watch tutorials, then practice coding",
        frequency: "DAILY",
        category: {
          id: 4,
          name: "Learning",
          emoji: "📚",
        },
        streak: 21,
        completedToday: true,
        lastCompletedAt: null,
        createdAt: "2026-03-04T09:13:30.602Z",
        updatedAt: "2026-03-04T09:13:30.602Z",
      },
      {
        id: "40741820-92c9-4984-aa8b-8094e3f185ff",
        title: "Learn Backend",
        description: null,
        frequency: "DAILY",
        category: {
          id: 4,
          name: "Learning",
          emoji: "📚",
        },
        streak: 0,
        completedToday: false,
        lastCompletedAt: null,
        createdAt: "2026-03-04T09:12:33.991Z",
        updatedAt: "2026-03-04T09:12:33.991Z",
      },
      {
        id: "52b118fc-a123-425f-bfb1-e61201bfaa76",
        title: "Drink a lot",
        description: "12 and above glasses of water cause its so hot",
        frequency: "DAILY",
        category: {
          id: 1,
          name: "Health",
          emoji: "🥗",
        },
        streak: 38,
        completedToday: true,
        lastCompletedAt: null,
        createdAt: "2026-03-04T08:00:13.936Z",
        updatedAt: "2026-03-06T18:34:02.929Z",
      },
    ],
  };

  const streakHabits = habits.data.filter((habit) => habit.streak > 0).length;

  return (
    <main className="min-h-screen px-4 py-30 text-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6">
        {/* HEADER */}
        <section className="flex justify-between items-end gap-6 flex-wrap mt-4 mb-6 col-[1/2] row-[1/2] md:col-[1/9] md:row-[1/2] lg:col-[1/10] lg:row-[1/2]">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase text-yellow-500 font-bold">
              Thursday, March 20
            </div>
            <h2 className="text-4xl font-fraunces font-extrabold">
              Good day, Jade!
            </h2>
            <p className="text-gray-600 text-sm">
              Keep growing your habits today
            </p>
          </div>

          <button onClick={handleAdd} className="flex items-center gap-2 px-6 py-3 rounded-full text-sm text-white font-semibold shadow-around-sm hover:shadow-around-md active:shadow-around-md bg-slate-900 hover:bg-slate-800 active:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer">
            <span className="w-5 h-5 rounded-full bg-yellow-500">+</span>
            <span>Add Habit</span>
          </button>
        </section>

        {/* MAIN LIST */}
        <section className="columns-1 lg:columns-2 gap-6 col-[1/2] row-[3/4] md:col-[1/9] md:row-[2/3] lg:col-[1/10] lg:row-[2/3]">
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
        <section className="flex flex-col gap-6 mb-6 md:mb-0 md:sticky md:top-30 md:self-start col-[1/2] row-[2/3] md:col-[9/13] md:row-[1/3] lg:col-[10/13] lg:row-[1/3]">
          <StreakCard streakHabits={streakHabits} />
          <HabitCompletionCard habits={habits.data} />
        </section>
      </div>
      <HabitModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingHabit}
      />
    </main>
  );
};

export default Dashboard;
