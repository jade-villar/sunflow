import { motion } from "motion/react";

const Features = () => {
  const staggerHeader = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUpBlur = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="features" className="px-4 py-30 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 space-y-5"
          variants={staggerHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
        >
          <motion.div
            className="text-xs font-semibold tracking-widest uppercase text-yellow-500"
            variants={fadeUpBlur}
          >
            Features
          </motion.div>
          <motion.h2
            className="max-w-2xl text-4xl md:text-5xl font-bold font-fraunces leading-tight"
            variants={fadeUpBlur}
          >
            Everything you need to&nbsp;
            <em className="text-yellow-500">stay consistent</em>
          </motion.h2>
          <motion.p className="text-gray-400 max-w-lg" variants={fadeUpBlur}>
            Simple, focused tools designed to build momentum — not overwhelm
            you.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
        >
          <motion.div
            className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-3xl p-6 md:p-8 hover:border-yellow-500 hover:shadow-around-md hover:shadow-yellow-500/10 active:border-yellow-500 active:shadow-around-md active:shadow-yellow-500/10 hover:scale-101 active:scale-101 transition"
            variants={fade}
          >
            <div className="w-11 aspect-square rounded-xl bg-yellow-500/30 flex items-center justify-center text-xl mb-4">
              <img src="/icons/flame.svg" className="w-6 aspect-square" />
            </div>
            <div className="text-lg font-semibold font-fraunces mb-2">
              Streak Tracking
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              Watch your streak grow day by day. Missing a day resets your
              count, creating a powerful motivation to show up — even on hard
              days.
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 border border-gray-700 rounded-3xl p-6 md:p-8 hover:border-emerald-500 hover:shadow-around-md hover:shadow-emerald-500/10 active:border-emerald-500 active:shadow-around-md active:shadow-emerald-500/10 hover:scale-101 active:scale-101 transition"
            variants={fade}
          >
            <div className="w-11 aspect-square rounded-xl bg-emerald-500/30 flex items-center justify-center text-xl mb-4">
              <img src="/icons/bar-chart.svg" className="w-6 aspect-square" />
            </div>
            <div className="text-lg font-semibold font-fraunces mb-2">
              Progress at a Glance
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              A clean daily dashboard shows exactly where you stand — no
              scrolling, no digging. Your progress ring updates in real time as
              you complete habits.
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 border border-gray-700 rounded-3xl p-6 md:p-8 hover:border-yellow-500 hover:shadow-around-md hover:shadow-yellow-500/10 active:border-yellow-500 active:shadow-around-md active:shadow-yellow-500/10 hover:scale-101 active:scale-101 transition"
            variants={fade}
          >
            <div className="w-11 aspect-square rounded-xl bg-yellow-500/30 flex items-center justify-center text-xl mb-4">
              <img src="/icons/spiral-calendar.svg" className="w-6 aspect-square" />
            </div>
            <div className="text-lg font-semibold font-fraunces mb-2">
              Flexible Schedules
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              Set habits to repeat daily, or on specific weekdays. Sunflow
              adapts to how your life actually works, not a rigid template.
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 border border-gray-700 rounded-3xl p-6 md:p-8 hover:border-emerald-500 hover:shadow-around-md hover:shadow-emerald-500/10 active:border-emerald-500 active:shadow-around-md active:shadow-emerald-500/10 hover:scale-101 active:scale-101 transition"
            variants={fade}
          >
            <div className="w-11 aspect-square rounded-xl bg-emerald-500/30 flex items-center justify-center text-xl mb-4">
              <img src="/icons/label.svg" className="w-6 aspect-square" />
            </div>
            <div className="text-lg font-semibold font-fraunces mb-2">
              Categories & Tags
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              Organize habits by Health, Productivity, Learning, Finance and
              more. Filter your view to focus on what matters most right now.
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 border border-gray-700 rounded-3xl p-6 md:p-8 hover:border-yellow-500 hover:shadow-around-md hover:shadow-yellow-500/10 active:border-yellow-500 active:shadow-around-md active:shadow-yellow-500/10 hover:scale-101 active:scale-101 transition"
            variants={fade}
          >
            <div className="w-11 aspect-square rounded-xl bg-yellow-500/30 flex items-center justify-center text-xl mb-4">
              <img src="/icons/party-popper.svg" className="w-6 aspect-square" />
            </div>
            <div className="text-lg font-semibold font-fraunces mb-2">
              One-tap Completion
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">
              Mark a habit done with a single tap. A satisfying animation
              confirms it — small celebrations that keep you coming back.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
