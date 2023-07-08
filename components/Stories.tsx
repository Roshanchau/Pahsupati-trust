import React from "react";
import { BsHeartFill } from "react-icons/bs";

const Stories = () => {
  return (
    <>
      <div
        className="bg-zinc-600 w-full flex flex-col
     items-center
     justify-center
     "
      >
        {/* description */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center
        w-auto
        sm:ml-14
        mt-10
        px-4
        sm:px-8
       "
        >
          <div
            className="flex flex-col 
            w-[40%]
            gap-2
            sm:px-4
            sm:mr-4
            "
          >
            <p
              className="
            text-yellow-500
            flex
            flex-row
            items-center
            gap-2
            font-medium
            text-sm
            "
            >
              <BsHeartFill size={12} />
              Stories of Survival
            </p>
            <h1
              className="
                font-semibold
                sm:text-3xl
                text-zinc-200
            "
            >
              Impact Stroies
            </h1>
          </div>
          <div
            className="flex
          items-center
          justify-center
          text-center
          sm:w-[48%]
          px-3
          md:px-20
          py-2
          md:py-4
          "
          >
            <p
              className="
            font-normal
            text-zinc-100
            text-md
            "
            >
              The major sectors for uplifting the quality of life are
              sustainable livelihood, children, education, health, senior
              citizens, environment and natural disasters.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3  grid-cols-1 
        lg:px-20 lg:py-10
        px-1
        md:pl-10
        py-2
        ml-8
        md:ml-10
        lg:ml-0
        mt-2
        sm:mt-0
        ">
          <div
            className="flex flex-col items-center justify-center
            bg-white
            rounded-xl
           lg: w-[90%]
            px-4
            mt-1
            sm:mt-0
            " 
          >
            {/* image */}
            <div className="relative">
              <img
              className="
              opacity-80
                rounded-b-[35%]
                h-[80%]
              " 
              src="/images/ambulance.jpg" alt="" />
              <div className="h-7 w-7
              absolute
              bottom-3
              left-8
               rounded-full 
               bg-[rgb(252,173,48)]"></div>
            </div>
            <div className="flex items-center
            justify-center
                text-center
                mt-1
                w-[95%]
            ">
              <p className="
              px-4
                text-center
                font-normal
                text-zinc-500
              ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laudantium debitis quibusdam, optio velit veniam
                eos id laboriosam cupiditate rem ullam a veritatis pariatur
                magnam libero eum fuga provident ipsa.
              </p>
            </div>
            <div className="flex 
            flex-col 
            items-center 
            justify-center
            mt-6
            mb-10
            ">
                <h3 className="
                font-semibold
                ">Madhesa</h3>
                <p className=" text-red-500">Resident-Inaruwa</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center
            bg-white
            rounded-xl
            w-[90%]
            px-4
            mt-4 sm:mt-6 lg:mt-0
            "
          >
            {/* image */}
            <div className="relative">
              <img
              className="
              opacity-80
                rounded-b-[35%]
                h-[80%]
              " 
              src="/images/ambulance.jpg" alt="" />
              <div className="h-7 w-7
              absolute
              bottom-3
              left-8
               rounded-full 
               bg-[rgb(252,173,48)]"></div>
            </div>
            <div className="flex items-center
            justify-center
                text-center
                mt-1
                w-[95%]
            ">
              <p className="
              px-4
                text-center
                font-normal
                text-zinc-500
              ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laudantium debitis quibusdam, optio velit veniam
                eos id laboriosam cupiditate rem ullam a veritatis pariatur
                magnam libero eum fuga provident ipsa.
              </p>
            </div>
            <div className="flex 
            flex-col 
            items-center 
            justify-center
            mt-6
            mb-10
            ">
                <h3 className="
                font-semibold
                ">Madhesa</h3>
                <p className=" text-red-500">Resident-Inaruwa</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center
            bg-white
            rounded-xl
            w-[90%]
            px-4
            mt-4 sm:mt-6 lg:mt-0
            "
          >
            {/* image */}
            <div className="relative">
              <img
              className="
              opacity-80
                rounded-b-[35%]
                h-[80%]
              " 
              src="/images/ambulance.jpg" alt="" />
              <div className="h-7 w-7
              absolute
              bottom-3
              left-8
               rounded-full 
               bg-[rgb(252,173,48)]"></div>
            </div>
            <div className="flex items-center
            justify-center
                text-center
                mt-1
                w-[95%]
            ">
              <p className="
              px-4
                text-center
                font-normal
                text-zinc-500
              ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laudantium debitis quibusdam, optio velit veniam
                eos id laboriosam cupiditate rem ullam a veritatis pariatur
                magnam libero eum fuga provident ipsa.
              </p>
            </div>
            <div className="flex 
            flex-col 
            items-center 
            justify-center
            mt-6
            mb-10
            ">
                <h3 className="
                font-semibold
                ">Madhesa</h3>
                <p className=" text-red-500">Resident-Inaruwa</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
