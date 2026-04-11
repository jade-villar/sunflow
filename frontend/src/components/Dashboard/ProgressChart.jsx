import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useHabit } from "../../context/HabitContext";

ChartJS.register(ArcElement, Tooltip);

const ProgressChart = () => {
  const { habits } = useHabit();
  
  const total = habits?.data?.length || 0;
  const completed = habits?.data?.filter((h) => h.isCompletedToday).length || 0;
  const remaining = total - completed;

  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: total > 0 ? [completed, remaining] : [1],
        backgroundColor: total > 0 ? ["#EAB308", "#E5E7EB"] : ["#E5E7EB"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    rotation: 0,
    circumference: 360,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="rounded-md w-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-28 h-28 md:w-40 md:h-40">
        <Doughnut data={data} options={options} />

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-slate-800 text-lg md:text-2xl font-fraunces font-bold">
            {percent}%
          </span>
          <span className="text-[11px] md:text-xs text-slate-500">
            completed
          </span>
        </div>
      </div>

      <p className="text-[11px] md:text-xs text-slate-500 text-center">
        {completed} of {total} habits completed
      </p>
    </div>
  );
};

export default ProgressChart;
