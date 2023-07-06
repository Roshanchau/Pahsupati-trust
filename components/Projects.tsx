import React from "react";
import{CgCalendarDates} from "react-icons/cg"

const Projects = () => {
  return (
    <>
      <div
        className="
        flex flex-col
        items-center
        justify-center
        bg-zinc-200
        w-full
    "
      >
        <div
          className="
            font-semibold 
            md:text-3xl
            text-[20px]
            text-center
            mt-4
            p-4
        "
        >
          <h1 className="font-[Poppins]">PROJECTS</h1>
        </div>

        {/*father project card div */}
        <div
          className="
            flex
            flex-col
            items-center justify-center
            p-2
            mt-4
        "
        >
          {/*Project cards */}
          {/* 1 */}
          <div
            className="
            flex
            flex-col
            md:flex-row
            rounded-lg
            bg-zinc-200
            mt-4
            group
            shadow-2xl
            md:w-[80%]
            "
          >
                  <div className="sm:hidden flex flex-row items-center sm:justify-end justify-center md:mr-7 p-4 sm:p-0   lg:skew-x-2 ">
                <img className="
                rounded-md
                opacity-90
                md:rounded-none
                    lg:h-full lg:w-[60%] 
                " src="/images/project1.jpeg" alt="project" />
            </div>
            <div
              className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    py-2 md:py-6
                    px-2 md:px-8
                    text-center
                    sm:w-[80%]
                "
            >
              <h1 className="text-[20px] 
              md:text-2xl 
              font-semibold
              hover:text-yellow-500
              ">Cloth And Food Bank Nepal</h1>
              <p className="flex items-center justify-center gap-1
                text-[10px] font-normal
              "><CgCalendarDates/>May 18th 2023</p>
              <p className="sm:font-normal
              text-6px md:text-[sm]
              ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, impedit aspernatur velit numquam sit ipsum consectetur
                obcaecati, incidunt cupiditate voluptatibus ratione quidem qui
                doloribus saepe debitis, quisquam repudiandae nemo assumenda
                delectus fugit accusamus quam tenetur beatae? Numquam mollitia
                quia at hic, nostrum repellat necessitatibus provident maxime
                animi, quis a ad?
              </p>
            </div>
            {/* image */}
            <div className="hidden sm:flex flex-row items-center sm:justify-end justify-center md:mr-7 p-4 sm:p-0   lg:skew-x-2 ">
                <img className="
                sm:group-hover:opacity-100
                sm:group-hover:scale-105
                transition
                duration
                ease-in-out
                opacity-90
                rounded-md
                md:rounded-none
                    lg:h-full lg:w-[60%] 
                " src="/images/project1.jpeg" alt="project" />
            </div>
          </div>

          {/* 2 */}
          <div
            className="
            flex
            flex-col
            md:flex-row
            rounded-lg
            bg-zinc-200
            group
            mt-10
            shadow-2xl
            md:w-[80%]
            "
          >
            {/* image */}
            <div className="flex flex-row items-center sm:justify-start justify-center md:ml-10 p-4 sm:p-0   lg:-skew-x-2 ">
                <img className="
                  sm:group-hover:opacity-100
                  sm:group-hover:scale-105
                  transition
                  duration
                  ease-in-out
                  opacity-90
                rounded-md
                md:rounded-none
                    lg:h-full lg:w-[60%] 
                " src="/images/project1.jpeg" alt="project" />
            </div>
            <div
              className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    py-2 md:py-6
                    px-2 md:px-4
                    text-center
                    sm:w-[80%]
                    mr-2
                "
            >
              <h1 className="text-[20px] 
              md:text-2xl 
              font-semibold
              hover:text-yellow-500
              
              ">Cloth And Food Bank Nepal</h1>
              <p className="flex items-center justify-center gap-1
                text-[10px] font-normal
              "><CgCalendarDates/>May 18th 2023</p>
              <p className="sm:font-normal
              text-6px md:text-[sm]
              ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, impedit aspernatur velit numquam sit ipsum consectetur
                obcaecati, incidunt cupiditate voluptatibus ratione quidem qui
                doloribus saepe debitis, quisquam repudiandae nemo assumenda
                delectus fugit accusamus quam tenetur beatae? Numquam mollitia
                quia at hic, nostrum repellat necessitatibus provident maxime
                animi, quis a ad?
              </p>
            </div>
            
          </div>
          {/* 3 */}
          <div
            className="
            flex
            flex-col
            md:flex-row
            rounded-lg
            bg-zinc-200
            mt-10
            group
            shadow-2xl
            md:w-[80%]
            "
          >
                  <div className="sm:hidden flex flex-row items-center sm:justify-end justify-center md:mr-7 p-4 sm:p-0   lg:skew-x-2 ">
                <img className="
                rounded-md
                opacity-90
                md:rounded-none
                    lg:h-full lg:w-[60%] 
                " src="/images/project1.jpeg" alt="project" />
            </div>
            <div
              className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    py-2 md:py-6
                    px-2 md:px-8
                    text-center
                    sm:w-[80%]
                "
            >
              <h1 className="text-[20px] 
              md:text-2xl 
              font-semibold
              hover:text-yellow-500
              
              ">Cloth And Food Bank Nepal</h1>
              <p className="flex items-center justify-center gap-1
                text-[10px] font-normal
              "><CgCalendarDates/>May 18th 2023</p>
              <p className="sm:font-normal
              text-6px md:text-[sm]
              ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, impedit aspernatur velit numquam sit ipsum consectetur
                obcaecati, incidunt cupiditate voluptatibus ratione quidem qui
                doloribus saepe debitis, quisquam repudiandae nemo assumenda
                delectus fugit accusamus quam tenetur beatae? Numquam mollitia
                quia at hic, nostrum repellat necessitatibus provident maxime
                animi, quis a ad?
              </p>
            </div>
            {/* image */}
            <div className="hidden sm:flex flex-row items-center sm:justify-end justify-center md:mr-7 p-4 sm:p-0   lg:skew-x-2 ">
                <img className="
                rounded-md
                sm:group-hover:opacity-100
                sm:group-hover:scale-105
                transition
                duration
                ease-in-out
                opacity-90
                md:rounded-none
                    lg:h-full lg:w-[60%] 
                " src="/images/project1.jpeg" alt="project" />
            </div>
          </div>

          {/* 4 */}
          <div
            className="
            flex
            flex-col
            md:flex-row
            rounded-lg
            bg-zinc-200
            group
            mt-10
            shadow-2xl
            md:w-[80%]
            "
          >
            {/* image */}
            <div className="flex flex-row items-center sm:justify-start justify-center md:ml-10 p-4 sm:p-0   lg:-skew-x-2 ">
                <img className="
                  sm:group-hover:opacity-100
                  sm:group-hover:scale-105
                  transition
                  duration
                  ease-in-out
                  opacity-90
                rounded-md
                md:rounded-none
                    lg:h-full lg:w-[60%] 
                " src="/images/project1.jpeg" alt="project" />
            </div>
            <div
              className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    py-2 md:py-6
                    px-2 md:px-4
                    text-center
                    sm:w-[80%]
                    mr-2
                "
            >
              <h1 className="text-[20px] 
              md:text-2xl 
              font-semibold
              hover:text-yellow-500
              ">Cloth And Food Bank Nepal</h1>
             <p className="flex items-center justify-center gap-1
                text-[10px] font-normal
              "><CgCalendarDates/>May 18th 2023</p>
              <p className="sm:font-normal
              text-6px md:text-[sm]
              ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, impedit aspernatur velit numquam sit ipsum consectetur
                obcaecati, incidunt cupiditate voluptatibus ratione quidem qui
                doloribus saepe debitis, quisquam repudiandae nemo assumenda
                delectus fugit accusamus quam tenetur beatae? Numquam mollitia
                quia at hic, nostrum repellat necessitatibus provident maxime
                animi, quis a ad?
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </> 
  );
};

export default Projects;
