const Footer = () => {
  const today = new Date();

  return (
    <footer className="bg-gray-100 px-4 pb-12 pt-16 flex flex-col gap-14">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center gap-4">
        <p className="text-gray-800 text-2xl font-black">sunflow</p>
        <div className="flex items-center gap-6">
          <a href="" className="cursor-pointer">
            <img
              src="/x-logo.svg"
              className="w-5 h-5 invert-15 hover:invert-0 transition"
            />
          </a>
          <a href="" className="cursor-pointer">
            <img
              src="/facebook-logo.svg"
              className="w-5 h-5 invert-15 hover:invert-0 transition"
            />
          </a>
          <a href="" className="cursor-pointer">
            <img
              src="/instagram-logo.svg"
              className="w-5 h-5 invert-15 hover:invert-0 transition"
            />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {today.getFullYear()} sunflow. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="" className="cursor-pointer">
            <p className="text-gray-500 text-sm hover:text-black transition">Terms</p>
          </a>
          <a href="" className="cursor-pointer">
            <p className="text-gray-500 text-sm hover:text-black transition">Privacy</p>
          </a>
          <a href="" className="cursor-pointer">
            <p className="text-gray-500 text-sm hover:text-black transition">Cookies</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
