import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className="h-screen bg-page bg-cover bg-center flex flex-col justify-center items-center gap-4 text-center">
        <h1 className="max-w-7xl mx-auto px-4 text-white text-6xl md:text-8xl font-black drop-shadow-lg">
          Grow Your Habits
        </h1>
        <p className="max-w-7xl mx-auto px-4 text-white text-lg md:text-xl drop-shadow-md">
          Sunflow helps you build daily habits peacefully and joyfully.
        </p>
        <button
          onClick={() => navigate("/register")}
          className="mt-8 px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
        >
          Start Tracking
        </button>
      </section>

      <section className="px-4 py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl text-gray-800 font-extrabold mb-8">
              Grow Habits with Sunflow
            </h2>

            <p className="text-gray-600 mb-6">
              Sunflow is designed to help you build healthy routines in a calm
              and motivating environment. Instead of overwhelming productivity
              tools, SunFlow focuses on simple tracking, visual progress, and
              gentle reminders to help you stay consistent and mindful.
            </p>
          </div>

          <div>
            <img
              src="/bg1.jpg"
              className="rounded-xl aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/bg7.jpg"
              className="rounded-xl aspect-video object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl text-gray-800 font-extrabold mb-8">
              Build Daily Habits That Last
            </h2>

            <p className="text-gray-600 mb-6">
              Sunflow helps you track meaningful habits and stay consistent
              every day. Whether you're improving your health, learning
              something new, or building mindfulness routines, SunFlow keeps
              everything organized in one place.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
