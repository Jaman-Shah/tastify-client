import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { RiGalleryLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  //  getting user from auth context

  const { user, signOutUser } = useContext(AuthContext);

  const toggleProfile = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const changeNavbarBg = () => {
    if (window.scrollY >= 90) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // sign out user

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        return axios.get("https://tastify-server-ten.vercel.app/logout", {
          withCredentials: true,
        });
      })
      .then((data) => {
        console.log(data);
        toast.success("Successfully signed out");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to sign out");
      });
  };

  // reuseable active class

  const activeClass = ({ isActive }) =>
    `hover:text-black hover:rounded-xl transition ease-in-out delay-  ${
      isActive ? "text-black" : "text-orange-500"
    }`;

  return (
    <nav
      x-data="{ isOpen: false }"
      className={`fixed w-full transform  top-1 rounded-xl z-10  ${
        navbarBg ? "bg-[#32CD32]" : "bg-[#78e08f]"
      }  shadow`}
    >
      <div className="px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="text-3xl font-bold text-orange-500">Tastify</h1>
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-black-500 hover:text-black dark:hover:text-black focus:outline-none focus:text-gray-600 "
              aria-label="toggle menu"
            >
              {/* when mobile menu is not opened  */}
              {!isOpen ? (
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                // while mobile menu is opened
                <svg
                  x-show="isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-green-500  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex relative items-center gap-10 flex-col md:flex-row md:mx-6">
            <NavLink to="/" className={activeClass}>
              <IoHomeOutline
                className={`${activeClass} text-3xl rounded-full`}
              />
            </NavLink>
            <NavLink to="/allfoods" className={activeClass}>
              <FaBowlFood className={`${activeClass} text-3xl rounded-full`} />
            </NavLink>
            <NavLink to="/gallery" className={activeClass}>
              <RiGalleryLine
                className={`${activeClass} text-3xl rounded-full`}
              />
            </NavLink>
            <div className="flex gap-4 items-center flex-col md:flex-row ">
              {user ? (
                <div className="flex gap-4">
                  <button onClick={toggleProfile}>
                    <img
                      src={user.photoURL}
                      className={`text-red-500 h-8 w-8 text-3xl border-2 border-white rounded-full`}
                    />
                  </button>
                  <button onClick={handleSignOutUser}>
                    <AiOutlineLogout className="text-3xl text-red-500" />
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <Link
                    to="/login"
                    className="p-1 border rounded-xl text-sm   text-white"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="p-1 border rounded-xl text-sm   text-white"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
            <div
              className={`${
                showProfileMenu ? "absolute" : "hidden"
              } md:-bottom-[200px] right-0 bg-green-300 border-2 shadow-2xl border-black p-4 rounded-2xl`}
            >
              <div className="flex flex-col gap-4">
                <Link
                  onClick={toggleProfile}
                  to="/myaddedfoods"
                  className="p-2 font-bold rounded-2xl bg-gray-500 text-white"
                >
                  My Added Food Items
                </Link>
                <Link
                  onClick={toggleProfile}
                  to="/addafood"
                  className="  p-2 font-bold rounded-2xl bg-gray-500 text-white"
                >
                  Add a food item
                </Link>
                <Link
                  onClick={toggleProfile}
                  to="/myorderedfoods"
                  className="  p-2 font-bold rounded-2xl bg-gray-500 text-white"
                >
                  My ordered food items
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:block">
            {/* <a
              className="relative 
               transition-colors duration-300 transform  hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
