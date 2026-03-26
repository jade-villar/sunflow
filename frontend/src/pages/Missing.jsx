import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen px-4 py-30 flex flex-col justify-center items-center gap-8 text-slate-800">
      <h1 className="font-fraunces font-bold text-4xl">Page not Found</h1>
      <button onClick={() => navigate("/dashboard")} className="px-6 py-2.5 text-sm font-semibold rounded-full shadow-around-sm shadow-yellow-200 text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 cursor-pointer hover:-translate-y-px active:translate-y-0 transition">Dashboard</button>
    </main>
  );
};

export default Missing;
