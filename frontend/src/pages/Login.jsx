import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="min-h-screen grid lg:grid-cols-12 text-gray-800">
      <figure className="hidden lg:block lg:col-span-7 h-full">
        <img
          src="/bg15.jpg"
          alt="sunflower field"
          className="object-cover h-full"
        />
      </figure>

      <div className="lg:col-span-5 bg-gray-100 flex flex-col justify-center gap-4 p-4">
        <h1 className="max-w-sm mx-auto w-full text-3xl text-center font-extrabold my-4">
          Welcome Back
        </h1>

        <form className="max-w-sm mx-auto w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border-2 border-gray-800 rounded-md px-4 py-2 placeholder:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border-2 border-gray-800 rounded-md px-4 py-2 placeholder:text-sm"
            />
          </div>

          <button className="w-full mt-6 bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600 transition">
            Log In
          </button>
        </form>

        <p className="max-w-sm mx-auto w-full text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
