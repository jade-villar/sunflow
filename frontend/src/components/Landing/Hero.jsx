import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "motion/react";

const Hero = () => {
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUpBlur = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeOut" },
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
    <section className="hero overflow-clip bg-surface min-h-screen px-4 py-35">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="/sunflow.svg"
          className="w-10 aspect-square"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, rotate: 360 }}
          transition={{
            opacity: { duration: 0.3 },
            y: { duration: 0.3, ease: "easeOut" },
            rotate: { repeat: Infinity, duration: 4, ease: "linear" },
          }}
        />

        <motion.h1
          className="text-7xl md:text-9xl font-fraunces font-bold leading-snug"
          variants={fadeUpBlur}
        >
          Grow your <span className="text-yellow-500">Habits.</span>
        </motion.h1>

        <motion.p
          className="max-w-xl text-base md:text-xl text-gray-500 leading-relaxed"
          variants={fadeUp}
        >
          Track your daily wins, maintain streaks, and grow one small habit at a
          time. Your future self starts today.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mt-6"
          variants={fadeUp}
        >
          <Link
            to="/register"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-around-btn-md hover:shadow-around-btn-lg active:shadow-around-btn-md bg-gray-900 hover:bg-gray-800 active:bg-gray-900 hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full bg-yellow-500">✦</span>
            <span>Start tracking</span>
          </Link>
          <LinkScroll
            to="features"
            smooth={true}
            className="flex items-center gap-2 px-8 py-4 rounded-full text-gray-800 font-semibold bg-white border border-gray-200 hover:border-gray-800 active:border-gray-800 transition cursor-pointer"
          >
            <span>▶</span>
            <span>See how it works</span>
          </LinkScroll>
        </motion.div>

        <motion.img
          src="/dashboard.png"
          className="hidden md:block max-w-5xl w-full mt-15 border rounded-3xl border-gray-200 hover:border-gray-300 shadow-around-lg shadow-gray-900/20 hover:scale-101 active:scale-99 transition"
          variants={fade}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
