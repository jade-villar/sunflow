import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const HabitCompletionChart = ({ habits }) => {
  const total = habits.length;
  const completed = habits.filter((habit) => habit.completedToday).length;
  const remaining = total - completed;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  const data = [
    { name: "Completed", value: completed },
    { name: "Remaining", value: remaining },
  ];

  const COLORS = ["#EAB308", "#D1D5DB"];

  return (
    <div className="bg-gray-100 p-6 rounded-md w-full flex flex-col items-center justify-center gap-6 hover:drop-shadow-sm active:drop-shadow-sm">
      <div className="relative w-40 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={55}
              outerRadius={75}
              paddingAngle={2}
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
          <span className="text-gray-800 text-2xl font-bold">{percent}%</span>
          <span className="text-xs text-gray-500">completed</span>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center">
        {completed} of {total} habits completed
      </p>
    </div>
  );
};

export default HabitCompletionChart;
