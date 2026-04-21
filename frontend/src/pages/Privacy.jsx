import { motion } from "motion/react";

const Privacy = () => {
  return (
    <main className="min-h-screen px-4 py-30 text-gray-800">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold font-fraunces mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-4 text-sm">
          <p>Sunflow respects your privacy.</p>

          <p>
            Sunflow only collect the information necessary to provide the app’s
            core features, such as account login and habit tracking. Your data
            is not sold or shared with third parties.
          </p>

          <p>
            Your information is stored securely and is only used to improve your
            experience within the app.
          </p>
        </div>

        <p className="text-xs text-gray-800/40 mt-10">
          Last updated: March 2026
        </p>
      </motion.div>
    </main>
  );
};

export default Privacy;
