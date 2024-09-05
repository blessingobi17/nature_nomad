import { useState, useContext } from "react";
import { FaUser, FaBars, FaSun, FaMoon } from "react-icons/fa";
import { FaCartShopping, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Content from "./Content";
import DataContext from "../context/DataContext";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const { setReqType, cart, search, setSearch } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const closeOverlay = () => {
    setDropdown(false);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <header
      className="lg:px-20 px-6 md:pt-6 pt-4 pb-6 font-ptSerif sticky top-0 z-50 
    bg-white text-black dark:bg-slate-950 dark:text-white"
    >
      {/* Dark Mode Toggle */}
      <div className="w-full flex justify-end pb-4">
        <button onClick={() => setIsDarkMode((prevState) => !prevState)}>
          {isDarkMode ? <FaMoon className="text-white" /> : <FaSun />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen ? (
        <nav className=" w-full flex justify-between items-center ">
          {isOpen && (
            <div
              className="navOverlay md:top-24 top-20 "
              onClick={closeMenu}
            ></div>
          )}

          {/* Menu Toggle */}
          <button
            className="lg:hidden block cursor-pointer "
            onClick={() => setIsOpen((prevstate) => !prevstate)}
          >
            {isOpen && <FaXmark />}
          </button>

          {/* Mobile Menu Content */}
          <div
            className="absolute top-20 left-0 bg-white dark:bg-slate-950
           w-4/5 px-6 py-8 h-screen"
          >
            <form action="search">
              <input
                type="text"
                id="search"
                placeholder="search"
                className="py-2 px-2 mb-8 w-full bg-gray-100 text-black
                 dark:bg-gray-200 outline-0 text-xs "
              />
            </form>
            <ul className="flex flex-col gap-6 pb-20">
              <li onClick={closeMenu}>
                <Content setReqType={setReqType} />
              </li>
              <li>
                <Link to="/account" onClick={closeMenu}>
                  Account
                </Link>
              </li>
            </ul>
            <div className="flex flex-col space-y-8 w-full items-center">
              <button className="border border-black dark:border-white py-3 rounded-full w-4/5">
                Log In
              </button>
              <button className="rounded-full w-4/5">Sign Up</button>
            </div>
          </div>
          <Link tp="/" onClick={closeMenu}>
            <h1 className="text-xl font-semibold ">Nature Nomad</h1>
          </Link>
          <Link to="/cart" className="relative">
            <FaCartShopping className="cursor-pointer" />
            <span className="absolute -top-4 -right-2 text-sm font-semibold">
              {cart.length ? cartQuantity() : ""}
            </span>
          </Link>
        </nav>
      ) : (
        // Desktop Menu
        <nav className="w-full flex justify-between items-center">
          {dropdown && (
            <div className="overlay top-28" onClick={closeOverlay}></div>
          )}
          <button
            className="lg:hidden block cursor-pointer"
            onClick={() => setIsOpen((prevstate) => !prevstate)}
          >
            {!isOpen && <FaBars />}
          </button>
          <ul className="lg:flex hidden w-1/5 text-sm">
            <Content setReqType={setReqType} setDropdown={setDropdown} />
          </ul>
          <Link to="/">
            <h1
              className="text-xl font-semibold"
              onClick={() => setDropdown(false)}
            >
              Nature Nomad
            </h1>
          </Link>
          <div className="flex items-center lg:gap-4 relative">
            <form action="search">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                id="search"
                placeholder="search"
                className="py-2 px-2 w-40 bg-gray-100 text-black
                 dark:bg-gray-200 outline-0 lg:block hidden text-xs"
              />
            </form>
            <button className="lg:block hidden">
              <FaUser
                onClick={() => setDropdown((prevState) => !prevState)}
                className="cursor-pointer"
              />
            </button>
            <Link
              to="/cart"
              className="relative"
              onClick={() => setDropdown(false)}
            >
              <FaCartShopping className="cursor-pointer" />
              <span className="absolute -top-4 -right-2 text-sm font-semibold">
                {cart.length ? cartQuantity() : ""}
              </span>
            </Link>
            <div
              className={
                dropdown
                  ? "absolute bg-white text-black dark:bg-white top-14 -right-4 flex flex-col gap-4 px-10 pt-4 pb-8"
                  : "hidden"
              }
            >
              <p className="font-ptSerif text-sm">Account</p>
              <ul className="text-xs flex flex-col gap-3">
                <li>
                  <Link to="">Log In</Link>
                </li>
                <li>
                  <Link to="">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
