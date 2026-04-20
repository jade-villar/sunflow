import { motion } from "motion/react";

const Cookies = () => {
  return (
    <main className="min-h-screen px-4 py-30 text-slate-800">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold font-fraunces mb-10">
          Cookie Policy
        </h1>

        <div className="space-y-4 text-sm">
          <p>
            Sunflow uses cookies to keep you logged in and maintain your session
            while using the app.
          </p>

          <p>These cookies are necessary for the app to function properly.</p>

          <p>Sunflow does not use cookies for advertising purposes.</p>
        </div>

        <p className="text-xs text-slate-800/40 mt-10">
          Last updated: March 2026
        </p>
      </motion.div>
    </main>
  );
};

export default Cookies;
