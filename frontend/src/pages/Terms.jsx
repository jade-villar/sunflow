const Terms = () => {
  return (
    <main className="min-h-screen px-4 py-30 text-slate-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold font-fraunces mb-10">
          Terms of Service
        </h1>

        <div className="space-y-4 text-sm">
          <p>
            By using Sunflow, you agree to use the app for personal habit
            tracking purposes only.
          </p>

          <p>You are responsible for any activity under your account.</p>

          <p>
            Sunflow is provided without guarantee of uninterrupted or error-free
            service.
          </p>

          <p>The app may be updated or modified at any time.</p>

          <p>By continuing to use the app, you agree to these terms.</p>
        </div>

        <p className="text-xs text-slate-800/40 mt-10">
          Last updated: March 2026
        </p>
      </div>
    </main>
  );
};

export default Terms;
