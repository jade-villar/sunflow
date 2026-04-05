import { useEffect, useState } from "react";
import AuthLoading from "./AuthLoading";
import HabitModal from "../components/HabitModal";
import { useHabit } from "../context/HabitContext";
import { useNavigate, useParams } from "react-router-dom";

const Habit = () => {
  const { id } = useParams();
  const { habit, habitLoading, getHabit, deleteHabit } = useHabit();

  const [editingHabit, setEditingHabit] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getHabit({ id });
  }, [id, getHabit]);

  const handleEdit = () => {
    setEditingHabit(habit.data);
    setIsOpen(true);
  };

  const handleDelete = async () => {
    await deleteHabit({ id });
    navigate("/dashboard");
  };

  // const logs = {
  //   status: "success",
  //   data: [
  //     {
  //       id: "d8d470b9-37b3-4aa7-866c-c3774968587d",
  //       date: "2026-03-04T00:00:00.000Z",
  //       completed: true,
  //     },
  //     {
  //       id: "d8d470b9-37b3-4aa7-866c-c3774968587d",
  //       date: "2026-03-05T00:00:00.000Z",
  //       completed: true,
  //     },
  //     {
  //       status: "success",
  //       data: [
  //         {
  //           id: "d8d470b9-37b3-4aa7-866c-c3774968587d",
  //           date: "2026-03-09T00:00:00.000Z",
  //           completed: true,
  //         },
  //       ],
  //     },
  //   ],
  // };

  // const transformLogs = (logs) => {
  //   return logs.map((log) => ({
  //     date: format(parseISO(log.date), "yyyy-MM-dd"),
  //     count: log.completed ? 1 : 0,
  //   }));
  // };

  const [completed, setCompleted] = useState(false);
  // const [progress, setProgress] = useState(5);

  const markComplete = () => {
    if (completed) return;
    setCompleted(true);
    // setProgress(6);
  };

  if (habitLoading) {
    return <AuthLoading />;
  }

  return (
    <main className="min-h-screen px-4 py-30 text-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col gap-5">
        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-3">
          <div className="flex flex-col gap-2 bg-slate-900 text-white rounded-[20px] p-4 md:p-6 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
            <div className="text-lg">🔥</div>
            <div className="text-[11px] text-slate-400 font-semibold tracking-wider">
              CURRENT STREAK
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold font-fraunces">
                {habit?.data?.currentStreak}
              </span>
              <span className="text-sm text-slate-400 mb-px">days</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-white border border-slate-200 rounded-[20px] p-4 md:p-6 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
            <div className="text-lg">🏆</div>
            <div className="text-[11px] text-slate-400 font-semibold tracking-wider">
              BEST STREAK
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold font-fraunces">
                {habit?.data?.longestStreak}
              </span>
              <span className="text-sm mb-px">days</span>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-2 bg-white border border-slate-200 rounded-[20px] p-4 md:p-6 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
            <div className="text-lg">✅</div>
            <div className="text-[11px] text-slate-400 font-semibold tracking-wider">
              TOTAL COMPLETED
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold font-fraunces">
                {habit?.data?.totalCompleted}
              </span>
              <span className="text-sm mb-px">times</span>
            </div>
          </div>
        </div>

        {/* HABIT CARD */}
        <div className="flex flex-col gap-3 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
          <div className="flex gap-2">
            <span className="text-[11px] uppercase px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 font-semibold tracking-wider">
              {habit?.data?.category?.name}
            </span>
            <span className="text-[11px] uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 font-semibold tracking-wider">
              {habit?.data?.frequency}
            </span>
          </div>

          <h1 className="text-3xl font-fraunces font-bold mb-2">
            {habit?.data?.title}
          </h1>

          <p className="text-sm text-slate-500 mb-2">
            {habit?.data?.description}
          </p>
        </div>

        {/* WEEK GRID */}
        <div className="flex flex-col gap-4 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
          <div className="text-xs text-slate-800 uppercase font-bold tracking-wider">
            Weekly History — Mar 4–10
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
              const states = [
                "done",
                "done",
                "done",
                "done",
                "missed",
                "done",
                "today",
              ];
              const state = states[i];

              return (
                <div key={day} className="flex flex-col items-center gap-1">
                  <span className="text-[10px] text-slate-400">{day}</span>

                  <div
                    className={`w-full h-10 flex items-center justify-center rounded-lg text-sm font-bold hover:-translate-y-1 transition
                    ${state === "done" && "bg-emerald-100 text-emerald-600 shadow-md shadow-emerald-50"}
                    ${state === "missed" && "bg-slate-100 text-slate-400"}
                    ${state === "today" && "bg-yellow-500 text-white shadow-md shadow-yellow-100"}
                  `}
                  >
                    {state === "done" ? "✓" : state === "missed" ? "✗" : "-"}
                  </div>

                  <span className="text-[10px] text-slate-400">
                    Mar {4 + i}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-between items-center text-sm">
          <button
            onClick={markComplete}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-around-md hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer
              ${
                completed
                  ? "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-600 shadow-emerald-100"
                  : "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 shadow-yellow-100"
              }
            `}
          >
            <span>{completed ? "✓" : "✦"}</span>
            <span>{completed ? "Completed!" : "Mark Complete"}</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="px-5 py-2 bg-white border border-slate-200 rounded-full hover:bg-slate-900 hover:border-slate-900 hover:text-white active:bg-slate-900 active:border-slate-900 active:text-white transition cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-5 py-2 rounded-full bg-red-100 text-red-500 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white transition cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <HabitModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialData={editingHabit}
      />
    </main>
  );
};

export default Habit;
