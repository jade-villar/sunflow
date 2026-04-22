import { Link } from "react-router-dom";
import { motion } from "motion/react";

const CTA = () => {
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUpBlur = {
    hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
    <section
      id="cta"
      className="cta-section overflow-clip px-4 py-30 bg-gray-900 text-white"
    >
      <motion.div
        className="flex flex-col items-center gap-5 text-center max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-300px" }}
      >
        <motion.div
          className="text-xs font-semibold tracking-widest uppercase text-yellow-500"
          variants={fadeUp}
        >
          Start for Free
        </motion.div>
        <motion.h2
          className="text-4xl md:text-6xl font-bold font-fraunces leading-tight"
          variants={fadeUpBlur}
        >
          Your streak starts
          <br />
          <em className="text-yellow-500">today.</em>
        </motion.h2>

        <motion.p className="text-gray-400" variants={fadeUp}>
          A simple habit tracker designed to help you stay consistent — without
          the overwhelm.
        </motion.p>

        <motion.div className="flex items-center gap-4 mt-8" variants={fadeUp}>
          <Link
            to="/login"
            className="px-8 py-3.5 rounded-full text-white font-semibold bg-gray-700/40 border border-gray-700 hover:border-gray-500 transition cursor-pointer"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="px-8 py-3.5 rounded-full text-white font-semibold shadow-yellow-500/30 shadow-around-btn-md hover:shadow-around-btn-lg active:shadow-around-btn-md bg-yellow-500 hover:bg-yellow-480 active:bg-yellow-600 hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            Get started
          </Link>
        </motion.div>
        <motion.p
          className="text-xs text-gray-500 tracking-wide"
          variants={fadeUp}
        >
          Free to use &bull; No credit card required
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CTA;
