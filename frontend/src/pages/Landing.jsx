import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import HowItWorks from "../components/Landing/HowItWorks";
import CTA from "../components/Landing/CTA";

const Landing = () => {
  return (
    <main className="text-slate-800">
      {/* HERO */}
      <Hero />

      {/* FEATURES */}
      <Features />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* CTA */}
      <CTA />
    </main>
  );
};

export default Landing;
