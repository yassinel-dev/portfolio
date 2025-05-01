import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const { t, i18n } = useTranslation();

  return (
    <header className=" top-0 w-full  z-40 fixed backdrop-blur-sm bg-black/30  shadow-lg md:bg-gray-950  ">
      <div>
        <div className="container mx-auto flex justify-between items-center p-3 md:p-4">
          <div>
            <h1 className=" text-2xl font-medium">
              Yassine<span className=" text-blue-900 text-4xl">.</span>
            </h1>
          </div>
          <ul className=" hidden md:flex gap-4 text-sm font-light bg-[#393e46] p-1 rounded-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-[#222831] p-2 rounded-lg"
                  : "hover:bg-white hover:text-[#222831] p-2 rounded-lg transition duration-300"
              }
            >
              {t("home")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-[#222831] p-2 rounded-lg"
                  : "hover:bg-white hover:text-[#222831] p-2 rounded-lg transition duration-300"
              }
            >
              À propos
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-[#222831] p-2 rounded-lg"
                  : "hover:bg-white hover:text-[#222831] p-2 rounded-lg transition duration-300"
              }
            >
              projects
            </NavLink>
            {/* <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-[#222831] p-2 rounded-lg"
                  : "hover:bg-white hover:text-[#222831] p-2 rounded-lg transition duration-300"
              }
            >
              Contact
            </NavLink> */}
          </ul>
          <NavLink
            to="/contact"
            className=" hidden md:flex md:bg-white text-[#222831] p-2 rounded-lg font-medium text-sm cursor-pointer"
          >
            contacter moi
          </NavLink>
          <div
            onClick={handleToggle}
            className=" fixed top-4 right-4 z-50 p-2 bg-[#474a56] rounded-lg text-white  cursor-pointer md:hidden "
          >
            {isOpen ? (
              <IoMdClose className=" text-2xl font-bold" />
            ) : (
              <RxHamburgerMenu className=" z-50 text-2xl font-bold " />
            )}
          </div>
          {/* Mobile Menu  */}
          {isOpen && (
            <ul className=" md:hidden lg:hidden  absolute z-20 top-18 right-5 w-40  flex flex-col justify-start  items-start text-2xlbg-[#393e46] gap-4 p-2 rounded-lg backdrop-blur-sm bg-black/30  shadow-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-[#222831] text-xl p-1 pl-3 w-full rounded-lg"
                    : "hover:bg-white hover:text-[#222831] text-xl p-1 pl-3 w-full rounded-lg transition duration-300"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-[#222831] text-xl p-1 pl-3 w-full rounded-lg"
                    : "hover:bg-white hover:text-[#222831] text-xl p-1 pl-3 w-full rounded-lg transition duration-300"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-[#222831] text-xl p-1 pl-3 w-full rounded-lg"
                    : "hover:bg-white hover:text-[#222831] text-xl p-1 pl-3 w-full rounded-lg transition duration-300"
                }
              >
                Work
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-[#222831] text-xl p-1 pl-3 w-full rounded-lg"
                    : "hover:bg-white hover:text-[#222831] text-xl p-1 pl-3 w-full rounded-lg transition duration-300"
                }
              >
                Contact
              </NavLink>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
