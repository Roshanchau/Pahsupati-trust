import React from "react";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center 
    p-10
    bg-zinc-50 
    mt-8
    "
      >
        <div
          className="flex sm:flex-row flex-col items-center justify-center
        gap-6
        sm:my-8
        "
        >
          <div className="flex sm:flex-row flex-col sm:mr-[15vw]">
            {/* address */}
            <div
              className="flex
           flex-col
           text-left
           flex-grow flex-wrap
           gap-2
        
           "
            >
              <h2
                className="
            font-[Poppins]
            font-medium
            text-2xl
            mb-4
            "
              >
                Address
              </h2>
              <p
                className="
            flex items-center justify-start
            gap-3 

            "
              >
                <BsFillTelephoneFill className="text-yellow-500" />
                <span className="hover:text-green-600
                cursor-pointer
                transition duration-100">
                  9808846298
                </span>
              </p>
              <p
                className="
            flex items-center justify-start
            gap-3"
              >
                <MdEmail className="text-yellow-500" />
                <span className="hover:text-green-600
                cursor-pointer
                transition duration-100">
                  roshanchau001@gmail.com
                </span>
              </p>
              <p
                className="
            flex items-center justify-start
            gap-3"
              >
                <FaMapLocation className="text-yellow-500" />
                <span className="hover:text-green-600
                cursor-pointer
                transition duration-100">
                  Dharan-15,langalichowk, Nepal
                </span>
              </p>
            </div>
            {/* Quick Links */}
            <div
              className="flex
              font-[poppins]
           flex-col
           text-left
           flex-grow flex-wrap
           gap-2
           sm:ml-20
           mt-6
           sm:mt-0
           "
            >
              <h2
                className="
            font-[Poppins]
            font-medium
            text-2xl
            mb-3
            "
              >
                Quick Links
              </h2>
              <p
                className="flex items-center
              text-lg
              cursor-pointer
              gap-3"
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
              </p>
              <p
                className="flex 
                cursor-pointer
              text-lg
              items-center gap-3"
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
              </p>
              <p
                className="
                cursor-pointer
              text-lg
              flex items-center gap-3"
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
              </p>
            </div>
          </div>

          {/* Follow */}
          <div className="flex flex-col  lg:mb-[12vh] sm:mb-[6vh]">
            <h2
              className="
            font-[Poppins]
            font-medium
            text-2xl
            mb-4
            "
            >
              Follow us on Social Media
            </h2>
            <div
              className="flex
              gap-3
              items-center justify-center"
            >
              <div
                className="rounded-full p-2 
                bg-red-500
                flex items-center justify-center
                hover:bg-pink-600
                "
              >
                <BsFacebook className="text-white" />
              </div>
              <div
                className="rounded-full p-2 
                bg-blue-500
                flex items-center justify-center
                hover:bg-orange-500
                "
              >
                <AiOutlineTwitter className="text-white" />
              </div>
              <div
                className="rounded-full p-2 
                bg-yellow-500
                flex items-center justify-center
                hover:bg-green-500
                "
              >
                <FiInstagram className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center
        p-2
        bg-zinc-500
        "
      >
        <p> © 2023 Pashupati Trust, Dharan, Nepal</p>
      </div>
    </>
  );
};

export default Footer;
