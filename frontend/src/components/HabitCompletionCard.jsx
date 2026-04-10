import HabitCompletionChart from "./HabitCompletionChart";

const HabitCompletionCard = ({ habits }) => {
  return (
    <div className="flex flex-col gap-5 bg-white border border-slate-200 rounded-3xl p-5 md:p-6 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition">
      <h3 className="text-xs text-slate-400 font-semibold tracking-wider">
        PROGRESS
      </h3>
      <HabitCompletionChart habits={habits} />
    </div>
  );
};

export default HabitCompletionCard;
