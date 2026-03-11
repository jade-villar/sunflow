import HabitCompletionChart from "./HabitCompletionChart";

const HabitCompletionCard = ({ habits }) => {
  return (
    <div className="p-4 md:p-6 bg-white rounded-lg">
      <h3 className="text-gray-800 font-bold mb-8">Progress</h3>
      <HabitCompletionChart habits={habits} />
    </div>
  );
};

export default HabitCompletionCard;
