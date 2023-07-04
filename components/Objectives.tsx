import React from "react";

const Objectives = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex flex-col items-center justify-center p-2 sm:p-4 m-2 sm:m-2">
          <p
            className="
            font-medium
            text-sm
            text-center
            sm:text-xl
            text-yellow-500"
          >
            Welcome To Shree Pashupati Trust Nepal
          </p>
          <div>
            <h1
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
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-1 sm:py-6 md:px-10 md:mx-20">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:border-r-[1px] flex flex-col items-center justify-center py-2 sm:py-3 px-2 sm:px-4 ">
              <div className="flex flex-col items-center justify-center  opacity-70 hover:opacity-100 ease-in-out transition-opacity delay-100 duration-700">
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
            </div>
            <div className="lg:border-r-[1px] flex flex-col items-center justify-center py-2 sm:py-3 px-2 sm:px-4 ">
              <div className="flex flex-col items-center justify-center  opacity-70 hover:opacity-100 ease-in-out transition-opacity delay-100 duration-700">
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
            <div className=" flex flex-col items-center justify-center py-2 sm:py-3 px-2 sm:px-4 ">
              <div className="flex flex-col items-center justify-center  opacity-70 hover:opacity-100 ease-in-out transition-opacity delay-100 duration-700">
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
                <p className="text-center  lg:w-[100%] w-[80%] font-light text-zinc-700 lg:leading-loose text-[20px] lg:text-[18px] mt-2">
                  Establish a network of sustainable cottage industries for
                  income generation amongst youth and women in the fields of
                  agriculture.
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 mt-2 lg:mx-20">
            <div className="lg:border-r-[1px] flex flex-col items-center justify-center py-1 sm:py-2 px-1 sm:px-3 ">
              <div className="flex flex-col items-center justify-center  opacity-70 hover:opacity-100 ease-in-out transition-opacity delay-100 duration-700">
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
            <div className=" flex flex-col items-center justify-center py-2 sm:py-3 px-1 sm:px-3 ">
              <div className="flex flex-col items-center justify-center  opacity-70 hover:opacity-100 ease-in-out transition-opacity delay-100 duration-700">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Objectives;
