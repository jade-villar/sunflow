import { motion } from "motion/react";

const HowItWorks = () => {
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

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="how" className="px-4 py-30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-5"
          variants={staggerHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
        >
          <motion.div
            className="text-xs font-semibold tracking-widest uppercase text-yellow-500"
            variants={fadeUpBlur}
          >
            How it Works
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-fraunces leading-tight"
            variants={fadeUpBlur}
          >
            Up and running in
            <br />
            <em className="text-yellow-500">3 simple steps</em>
          </motion.h2>
          <motion.p className="text-gray-500" variants={fadeUpBlur}>
            No complicated setup, no overwhelming onboarding. Just habits.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-y-15 gap-x-10 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
        >
          <motion.div
            className="z-10 flex flex-col items-center text-center group"
            variants={fadeUp}
          >
            <div className="w-18 aspect-square rounded-full flex items-center justify-center text-2xl font-bold font-fraunces mb-6 bg-yellow-500 text-white shadow-around-md shadow-yellow-500/30 group-hover:scale-110 group-active:scale-110 transition">
              1
            </div>
            <div className="text-lg font-semibold font-fraunces mb-4">
              Create your habits
            </div>
            <div className="text-gray-500 text-sm leading-relaxed">
              Name your habit, set category, pick frequency and schedule. Takes
              under 30 seconds per habit.
            </div>
          </motion.div>

          <motion.div
            className="z-10 flex flex-col items-center text-center group"
            variants={fadeUp}
          >
            <div className="w-18 aspect-square rounded-full flex items-center justify-center text-2xl font-bold font-fraunces mb-6 bg-yellow-500 text-white shadow-around-md shadow-yellow-500/30 group-hover:scale-110 group-active:scale-110 transition">
              2
            </div>
            <div className="text-lg font-semibold font-fraunces mb-4">
              Show up every day
            </div>
            <div className="text-gray-500 text-sm leading-relaxed">
              Your dashboard greets you each day with your habits. Mark them
              complete as you go.
            </div>
          </motion.div>

          <motion.div
            className="z-10 flex flex-col items-center text-center group"
            variants={fadeUp}
          >
            <div className="w-18 aspect-square rounded-full flex items-center justify-center text-2xl font-bold font-fraunces mb-6 bg-yellow-500 text-white shadow-around-md shadow-yellow-500/30 group-hover:scale-110 group-active:scale-110 transition">
              3
            </div>
            <div className="text-lg font-semibold font-fraunces mb-4">
              Watch yourself grow
            </div>
            <div className="text-gray-500 text-sm leading-relaxed">
              Streaks grow, your total completions climb, and the habits that
              seemed hard become second nature.
            </div>
          </motion.div>

          <motion.hr
            className="hidden md:block absolute top-9 right-[17%] left-[17%] border-dashed border-gray-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-165px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ originX: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
