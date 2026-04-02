import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const HabitCompletionChart = ({ habits }) => {
  const total = habits?.length;
  const completed = habits?.filter((habit) => habit.completedToday).length;
  const remaining = total - completed;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const data = [
    { name: "Completed", value: completed },
    { name: "Remaining", value: remaining },
  ];

  const COLORS = ["#EAB308", "#D1D5DB"];

  return (
    <div className="rounded-md w-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-40 h-40">
        <ResponsiveContainer width={160} height={160}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={55}
              outerRadius={75}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Stat */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-slate-800 text-2xl font-fraunces font-bold">
            {percent}%
          </span>
          <span className="text-xs text-slate-500">completed</span>
        </div>
      </div>

      <p className="text-xs text-slate-500 text-center">
        {completed} of {total} habits completed
      </p>
    </div>
  );
};

export default HabitCompletionChart;
