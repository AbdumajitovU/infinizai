import { useState } from "react";
import { Link } from "react-router-dom";
import { cart, closebtn, hamburger, mainLogo } from "../../utils/icons";

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="w-full pt-4">
      <div className="max-w-6xl mx-auto flex">
        <LeftAction />
        <Navbar />
        <RightAction />
        {isMenu && <MobileMenu />}
        <div>
          {!isMenu ? (
            <button
              onClick={() => {
                setIsMenu(true);
              }}
              className="flex justify-end md:hidden text-white"
            >
              {hamburger}
            </button>
          ) : (
            <button
              onClick={() => {
                setIsMenu(false);
              }}
            >
              {closebtn}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

function LeftAction() {
  return (
    <div className="flex w-full items-center">
      {mainLogo}
      <h1 className="text-4xl text-white">
        Infinizai<span className="text-blue-400">.</span>
      </h1>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="hidden md:flex w-full justify-between items-center font-medium text-white">
      <Link className="text-yellow-400" to={"/"}>
        Home
      </Link>
      <Link className="hover:text-yellow-500" to={"/"}>
        About
      </Link>
      <Link className="hover:text-yellow-500" to={"/"}>
        Team
      </Link>
      <Link className="hover:text-yellow-500" to={"/"}>
        Shop
      </Link>
      <Link className="hover:text-yellow-500" to={"/"}>
        Pages
      </Link>
    </nav>
  );
}

function RightAction() {
  return (
    <div className="w-full hidden md:flex gap-4 items-center justify-end">
      <span class="relative inline-block">
        {cart}
        <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-800 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
          0
        </span>
      </span>
      <button className="px-10 py-3 border-2 hover:border-yellow-500 hover:text-yellow-500 border-white text-white">
        Contact Us
      </button>
    </div>
  );
}

function MobileMenu() {
  return (
    <>
      <div id="mobile-menu" className="w-full bg-black ml-20">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            class="bg-yellow-600 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Home
          </a>

          <a
            href="#"
            class="text-gray-300 hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>

          <a
            href="#"
            class="text-gray-300 hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>

          <a
            href="#"
            class="text-gray-300 hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Shop
          </a>
          <a
            href="#"
            class="text-gray-300 hover:bg-yellow-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Pages
          </a>
        </div>
      </div>
    </>
  );
}
