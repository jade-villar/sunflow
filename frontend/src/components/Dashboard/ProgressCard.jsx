import ProgressChart from "./ProgressChart";

const ProgressCard = ({ isInitialLoading }) => {
  return (
    <div
      className="flex flex-col gap-5 bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-around-sm hover:shadow-around-md active:shadow-around-md transition"
    >
      <h3 className="text-xs text-gray-400 font-semibold tracking-wider">
        PROGRESS
      </h3>
      <ProgressChart isInitialLoading={isInitialLoading} />
    </div>
  );
};

export default ProgressCard;
