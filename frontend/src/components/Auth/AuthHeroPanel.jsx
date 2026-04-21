const AuthHeroPanel = () => {
  return (
    <div className="auth-panel overflow-clip hidden md:flex flex-col gap-6 bg-gray-900 rounded-l-3xl p-10">
      <div className="flex items-center gap-4 mb-6">
        <img src="/sunflow.svg" className="w-6 h-6" />
        <h3 className="text-xl font-fraunces text-white tracking-wide">
          sunflow
        </h3>
      </div>
      <h1 className="text-5xl italic font-bold font-fraunces text-white leading-14">
        Grow Your <span className="text-yellow-500">Habits.</span>
      </h1>
      <h4 className="text-sm text-gray-400">
        Track your daily wins, maintain streaks, and grow one small habit at a
        time. Your future self starts today.
      </h4>
    </div>
  );
};

export default AuthHeroPanel;
