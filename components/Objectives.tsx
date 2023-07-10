import React from "react";
import { motion } from "framer-motion";

const Objectives = () => {
  return (
    <>
      <motion.div className="flex flex-col items-center justify-center mt-4 bg-bottom bg-contain bg-no-repeat lg:bg-[url('/images/background.png')]">
        <motion.div className="flex flex-col items-center justify-center p-2 sm:p-4 m-2 sm:m-2">
          <motion.div
            className="
            font-medium
            text-sm
            text-center
            sm:text-xl
            text-yellow-500"
            
          >
            <img
              src="/images/service-line.png"
              alt=""
              className="hidden sm:flex absolute right-0"
            />
            <motion.p
            initial={{ x: -100}}
            viewport={{once:true}}
            whileInView={{ x: 0, transition: { duration: 1 } }}
            > 
            Welcome To Shree Pashupati Trust Nepal
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ x: 100}}
            viewport={{once:true}}
            whileInView={{ x: 0, transition: { duration: 1 } }}
          >
            <motion.h1
              className="
                        font-normal 
                        md:text-4xl
                        text-[20px]
                        text-center
                        mt-2
                        
                    "
            >
              Together , We Transform Lives
              <br />
              And Inspire Change.
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col items-center justify-center py-1 sm:py-6 md:px-10 md:mx-20">
          <motion.div 
           initial={{ opacity: 0 }}
           viewport={{ once: false }}
           whileInView={{
             opacity: 1,
             transition: { duration: 1, delay:0.15},
           }}
          className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <motion.div
           
              className="sm:hover:scale-110 
            ease-in-out
            lg:border-r-[1px] 
            flex flex-col 
            items-center 
            justify-center 
            py-2 sm:py-3 px-2 sm:px-4 
            group
            "
            >
              <div className="flex flex-col items-center justify-center  opacity-70 group-hover:opacity-100 ease-in-out transition-opacity delay-100 duration-700">
                <img
                  className="h-full w-full z-50"
                  src="/images/healthY.png"
                  alt="health"
                />
              </div>
              <div className="mt-2 sm:mt-5 flex flex-col items-center justify-center  ">
                <h1 className="text-sm sm:text-xl font-semibold text-center">
                  Access to Health
                </h1>
                <p className="text-center  lg:w-[100%]  w-[80%] font-light text-zinc-700 lg:leading-loose text-[20px] lg:text-[18px] mt-2">
                  Proper dissemination of health care services and facilities
                  especially to children and senior citizens.
                </p>
              </div>
            </motion.div>
            <div className="group sm:hover:scale-110 ease-in-out transition-all duration-100 delay-75 lg:border-r-[1px]  flex flex-col items-center justify-center py-2 sm:py-3 px-2 sm:px-4 ">
              <div className="flex flex-col items-center justify-center  opacity-70 group-hover:opacity-100 ease-in-out transition-opacity delay-100 duration-700">
                <img
                  className="h-full w-full z-50"
                  src="/images/education.png"
                  alt="health"
                />
              </div>
              <div className="mt-2 sm:mt-5 flex flex-col items-center justify-center  ">
                <h1 className="text-sm sm:text-xl font-semibold text-center">
                  Access to Education
                </h1>
                <p className="text-center  lg:w-[100%] w-[80%] font-light text-zinc-700 lg:leading-loose text-[20px] lg:text-[18px] mt-2">
                  Improve standards of schooling facilities as well as providing
                  access to educational opportunities to children.
                </p>
              </div>
            </div>
            <div className="flex sm:hidden md:hidden  lg:flex">
              <div className=" group sm:hover:scale-110 ease-in-out transition-all duration-100 delay-75 flex flex-col items-center justify-center py-2 sm:py-3 px-2 sm:px-4 ">
                <div className="flex flex-col items-center justify-center  opacity-70 group-hover:opacity-100 ease-in-out transition-opacity delay-100 duration-700">
                  <img
                    className="h-full w-full z-50"
                    src="/images/livelihood.png"
                    alt="health"
                  />
                </div>
                <div className="mt-2 sm:mt-5 flex flex-col items-center justify-center  ">
                  <h1 className="text-sm sm:text-xl font-semibold text-center">
                    Enhance Livelihood
                  </h1>
                  <p className="text-center  lg:w-[100%]  w-[80%] font-light text-zinc-700 lg:leading-loose text-[20px] lg:text-[18px] mt-2">
                    Establish a network of sustainable cottage industries for
                    income generation amongst youth and women in the fields of
                    agriculture.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: false }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.85, delay:0.40},
            }}
          className="grid sm:grid-cols-2 grid-cols-1 mt-2 lg:mx-20">
            <div className="group sm:hover:scale-110 ease-in-out transition-all duration-100 delay-75 lg:border-r-[1px] flex flex-col items-center justify-center py-1 sm:py-2 px-1 sm:px-3 ">
              <div className="flex flex-col items-center justify-center  opacity-70 group-hover:opacity-100 ease-in-out transition-opacity delay-100 duration-700">
                <img
                  className="h-full w-full z-50"
                  src="/images/relief.png"
                  alt="health"
                />
              </div>
              <div className="mt-2 sm:mt-5 flex flex-col items-center justify-center  ">
                <h1 className="text-sm sm:text-xl font-semibold text-center">
                  Relief
                </h1>
                <p className="text-center  lg:w-[80%] w-[75%] font-light text-zinc-700 lg:leading-loose text-[20px] lg:text-[18px] mt-2">
                  Participate and organize relief activities in disaster
                  affected areas and implement rehabilitation programs.
                </p>
              </div>
            </div>
            <div className="group sm:hover:scale-110 ease-in-out transition-all duration-100 delay-75 flex flex-col items-center justify-center py-2 sm:py-3 px-1 sm:px-3 ">
              <div className="flex flex-col items-center justify-center  opacity-70 group-hover:opacity-100 ease-in-out transition-opacity delay-100 duration-700">
                <img
                  className="h-full w-full z-50"
                  src="/images/environment.png"
                  alt="health"
                />
              </div>
              <div className="mt-2 sm:mt-5 flex flex-col items-center justify-center  ">
                <h1 className="text-sm sm:text-xl font-semibold text-center">
                  Environment
                </h1>
                <p className="text-center  lg:w-[80%] w-[80%] font-light text-zinc-700 lg:leading-loose text-[20px] lg:text-[18px] mt-2">
                  Undertake measures to secure a cleaner environment and raise
                  awareness and initiate actions to ensure clean water, land,
                  and air.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Objectives;
