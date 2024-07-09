import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 gradient_logo blur-sm" />
            <Image
              src="/assets/images/logosaas.png"
              alt="logo saas"
              width={40}
              height={41}
              className="w-auto h-auto relative"
            />
          </div>
          <div className="border border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={20}
              height={20}
            />
          </div>
          <nav className="hidden sm:flex gap-6 items-center">
            <Link
              href="/"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-white text-opacity-60 hover:text-opacity-100"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Updates
            </Link>
            <Link
              href="/"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Help
            </Link>
            <Link
              href="/"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Customers
            </Link>
            <button className="bg-white px-4 py-2 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
