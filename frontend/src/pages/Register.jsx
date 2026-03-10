import { Link } from "react-router-dom";

const Register = () => {
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
          Create Account
        </h1>

        <form className="max-w-sm mx-auto w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full border-2 border-gray-800 rounded-md px-4 py-2 placeholder:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border-2 border-gray-800 rounded-md px-4 py-2 placeholder:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full border-2 border-gray-800 rounded-md px-4 py-2 placeholder:text-sm"
            />
          </div>

          <button className="w-full mt-6 bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600 transition">
            Create Account
          </button>
        </form>

        <p className="max-w-sm mx-auto w-full text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
