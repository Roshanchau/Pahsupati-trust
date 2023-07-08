import React, { useState, useEffect } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {BiHomeHeart } from "react-icons/bi"
import {HiOutlineViewfinderCircle} from "react-icons/hi2"
import {AiOutlineTeam} from "react-icons/ai"
import {GrProjects} from "react-icons/gr"
import {AiOutlineContacts} from "react-icons/ai"
import {LiaDonateSolid} from "react-icons/lia"


const TOP_OFFSET = 40;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackgroud, setShowBackgroud] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, [scrollSpy]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackgroud(true);
      } else {
        setShowBackgroud(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-zinc-500 transition ease transform duration-300`;
  return (
    <>
      <header>
        <nav
          className={`flex flex-row items-center sm:justify-between p-2
         t   w-full
            z-50
            fixed
            top-0
            left-0
            h-[80px]
            lg:h-[auto]
            drop-shadow-xl
            transition
            ${showBackgroud ? "bg-zinc-50 " : ""}
  `}
        >
          <div
            className="
            sm:hidden
            flex
          "
          >
            <button
              className=" flex-col h-10 w-10 flex justify-center items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "rotate-45 translate-y-3 " : ""
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "-rotate-45 -translate-y-3 " : ""
                }`}
              />
            </button>
          </div>

          <div> 
            <img
              className={`transition duration h-[100px] w-[full] sm:h-20
            ${showBackgroud ? "sm:h-[60px] h-[100px]" : ""}`}
              src="/images/logo1.png"
              alt="logo"
            />
          </div>
          <div
            className="flex
             flex-row
              items-center 
              mr-1 md:mr-3  md:py-2
               md:px-3
          "
          >
            <ul
              className="font-thin
              text-nutral-600
              hidden
              mr-4
              font-sans
               text-[16px]
                md:text-[18px]
                lg:text-[20px]
                sm:flex
                flex-row
                items-center
                justify-center
                 gap-5
                 md:gap-8 
                 lg:gap-10
                 "
            >
              <li
                tabIndex={0}
                className="drop-shadow-sm cursor-pointer  hover:text-yellow-500"
              >
                <Link
                  activeClass="active"
                  to="SwiperComponent"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  Home
                </Link>
              </li>
              <li
                tabIndex={0}
                className="drop-shadow-sm cursor-pointer   hover:text-yellow-500"
              >
                <Link
                  activeClass="active"
                  to="Objectives"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  Objectives
                </Link>
              </li>
              <li
                tabIndex={0}
                className="drop-shadow-sm cursor-pointer  hover:text-yellow-500"
              >
                <Link
                  activeClass="active"
                  to="Teams"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  Teams
                </Link>
              </li>
              <li
                tabIndex={0}
                className="drop-shadow-sm cursor-pointer   hover:text-yellow-500"
              >
                <Link
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  Projects
                </Link>
              </li>
              <li
                tabIndex={0}
                className="drop-shadow-sm cursor-pointer  hover:text-yellow-500"
              >
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  Contact
                </Link>
              </li>
              <li className="drop-shadow-sm cursor-pointer  hover:text-yellow-500">
                Donate Now
              </li>
            </ul>
          </div>
        </nav>

        {isOpen && (
          <div className="transition-all ease-in-out 
          duration
          ">
            <aside
              id="default-sidebar"
              className="fixed
           sm:hidden
            my-0 top-20 z-40 w-50
             h-full
             transition-all
            ease-in-out
            -translate-y-3
             duration-1000 translate-x-0 "
              aria-label="Sidebar"
            >
              <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium mt-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <BiHomeHeart size={25}/>
                      <Link
                  activeClass="active"
                  to="SwiperComponent"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                        Home
                      </span>
                </Link>
                    </a>
                  </li>
                  <li>
                  <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <HiOutlineViewfinderCircle size={25}/>
                      <Link
                  activeClass="active"
                  to="Objectives"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                        Objectives
                      </span>
                </Link>
                    </a>
                  </li>
                  <li>
                  <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <AiOutlineTeam size={25}/>
                      <Link
                  activeClass="active"
                  to="Teams"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                        Teams
                      </span>
                </Link>
                    </a>
                  </li>
                  <li>
                  <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <GrProjects size={20}/>
                      <Link
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={2000}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                        Projects
                      </span>
                </Link>
                    </a>
                  </li>
                  <li>
                  <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <AiOutlineContacts size={20}/>
                      <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={4000}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                        Contact
                      </span>
                </Link>
                    </a>
                  </li>
                  <li>
                  <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <LiaDonateSolid size={20}/>
                      <Link
                  activeClass="active"
                  to=""
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={4000}
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                        Donate Now
                      </span>
                </Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Sign Up
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
