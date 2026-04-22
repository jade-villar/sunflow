import { useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CountUp from "react-countup";
import { useHabit } from "../../context/HabitContext";
import { fireConfetti } from "../../utils/confetti";

ChartJS.register(ArcElement, Tooltip);

const ProgressChart = ({ isInitialLoading }) => {
  const { habits } = useHabit();

  const hasConfettiFired = useRef(false);

  const habitsToday = habits?.filter((habit) => habit.isScheduledToday);

  const total = habitsToday?.length || 0;
  const completed = habitsToday?.filter((h) => h.isCompletedToday).length || 0;
  const remaining = total - completed;

  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  useEffect(() => {
    if (percent === 100) {
      if (!hasConfettiFired.current) {
        hasConfettiFired.current = true;
        fireConfetti();
      }
    } else {
      // Reset
      hasConfettiFired.current = false;
    }
  }, [percent]);

  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: total > 0 ? [completed, remaining] : [1],
        backgroundColor: total > 0 ? ["oklch(79.5% 0.184 86.047)", "oklch(92.8% 0.006 264.531)"] : ["oklch(92.8% 0.006 264.531)"],
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
        {isInitialLoading ? (
          <span className="w-full h-full bg-white"></span>
        ) : (
          <Doughnut data={data} options={options} />
        )}

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg md:text-2xl font-fraunces font-bold">
            <CountUp end={percent} duration={0.6} suffix="%" />
          </span>
          <span className="text-[11px] md:text-xs text-gray-500">
            completed
          </span>
        </div>
      </div>

      <p className="text-[11px] md:text-xs text-gray-500 text-center">
        {completed} of {total} habits completed
      </p>
    </div>
  );
};

export default ProgressChart;
