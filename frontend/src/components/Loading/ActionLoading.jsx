const ActionLoading = ({ text }) => {
  return (
    <span className="flex gap-0.5">
      <span>{text}</span>
      <span className="flex gap-px font-bold">
        <span className="animate-pulse [animation-delay:-0.3s]">.</span>
        <span className="animate-pulse [animation-delay:-0.15s]">.</span>
        <span className="animate-pulse">.</span>
      </span>
    </span>
  );
};

export default ActionLoading;
