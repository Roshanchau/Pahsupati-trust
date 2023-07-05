import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Teams = () => {
  const [show, setShow] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showInt, setShowInt] = useState(false);
  const toggleShow = () => {
    return setShow(!show);
  };
  const toggleshowTeam = () => {
    setShowBrand(false);
    setShowTeam(false);
    setShowInt(false);
  };
  const toggleshowBrand = () => {
    setShowBrand(true);
    setShowTeam(true);
    setShowInt(false);
  };
  const toggleshowInt = () => {
    setShowBrand(false);
    setShowTeam(true);
    setShowInt(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-2 md:py-4 px-4 md:px-6 mt-6">
        <div className="flex items-center justify-center ">
          <h1
            className=" font-normal 
                        md:text-4xl
                        text-[20px]
                        text-center"
          >
            Meet The Team
          </h1>
        </div>
        <div
          className="
            sm:flex
            flex-row
            items-center
            justify-center
            gap-6
            mt-4
            font-normal
            hidden
        "
        >
          <div
            className="flex 
          items-center justify-center text-center border-r-2 px-4"
          >
            <p
              onClick={toggleshowTeam}
              tabIndex={0}
              className="text-zinc-500 
              focus-within:text-[rgb(229,175,8)]
             cursor-pointer
             "
            >
              TEAM
            </p>
          </div>
          <div className="flex items-center justify-center text-center">
            <p
              onClick={toggleshowBrand}
              tabIndex={0}
              className="text-zinc-500
              focus-within:text-[rgb(229,175,8)]
              cursor-pointer"
            >
              BRAND AMBASSADOR
            </p>
          </div>
          <div className="flex items-center justify-center text-center border-l-2 px-4">
            <p
              tabIndex={0}
              onClick={toggleshowInt}
              className="text-zinc-500
            focus-within:text-[rgb(229,175,8)]
            cursor-pointer"
            >
              INTERNATIONAL TEAM
            </p>
          </div>
        </div>
        {/* filter button */}
        <div className="flex sm:hidden items-center justify-center mt-2">
          <div
            className="flex
                 flex-col
                items-center
                justify-center
            "
          >
            <button
              className="border-2 
              rounded
              border-zinc-400 
              border-opacity-70
              hover:border-yellow-400
                px-4
                flex
                items-center
                justify-center
                font-normal
                text-neutral-700
                text-xl
                py-1"
            >
              Filter
              <RiArrowDropDownLine
                onClick={toggleShow}
                className="text-zinc-500"
                size={25}
              />
            </button>
          </div>
        </div>

        {/* images */}
        <div
          className="flex 
        flex-col 
        items-center
        justify-center
        mt-8
        "
        >
          {!showTeam && (
            <div
              className="
             grid
             lg:grid-cols-3
             sm:grid-cols-2
             grid-cols-1
             gap-20
            "
            >
              {/* image cols */}
              <div
                className="
              z-10 ease-in-out
              rounded-xl
              transform-gpu
              duration
             hover:scale-95
             hover:shadow-md 
              opacity-80
              bg-cover bg-no-repeat
                bg-[url('/images/team1.jpg')]
                h-[300px] w-[300px]
                relative
              "
              >
                {/* filter list */}
                <div
                  className={`z-50
              bg-zinc-100
              absolute
              w-full
              -top-6
              bg-opacity-90
             shadow-md p-4 ${show ? "" : "hidden"}`}
                >
                  <ul onClick={toggleShow} className="text-center">
                    <li
                      tabIndex={0}
                      onClick={toggleshowTeam}
                      className="text-[20px]
                       font-normal
                      
                       text-zinc-500 p-1 focus-within:text-yellow-400 hover:bg-opacity-70"
                    >
                      Teams
                      <div
                        className="h-[1px]
                       bg-neutral-500
                       mt-2
                       bg-opacity-40"
                      ></div>
                    </li>
                    <li
                      onClick={toggleshowBrand}
                      className="text-[20px] font-normal text-zinc-500 p-1 hover:bg-yellow-400 hover:bg-opacity-70"
                    >
                      Brand Ambassador
                      <div
                        className="h-[1px]
                       bg-neutral-500
                       mt-2
                       bg-opacity-40"
                      ></div>
                    </li>
                    <li
                      onClick={toggleshowInt}
                      className="text-[20px] font-normal text-zinc-500 p-1 hover:bg-yellow-400 hover:bg-opacity-70"
                    >
                      International Team
                    </li>
                  </ul>
                </div>
                <div
                  className="bg-neutral-600
                 p-3
                  flex
                  flex-col
                  justify-center
                  absolute
                  bottom-5
                  w-[80%]
                  transform
                  rounded-r-full
                  opacity-70
                 "
                >
                  <div className="ml-4 text-zinc-200">
                    <h2
                      className="text-lg
                    sm:text-2xl
                  "
                    >
                      Kamal Gc
                    </h2>
                    <p className="text-sm sm:text-md">Founder</p>
                  </div>
                </div>
              </div>
              <div
                className="
              z-10 ease-in-out rounded-xl
              transform-gpu
              duration
             hover:scale-95
             hover:shadow-md opacity-80
              bg-cover
              bg-no-repeat
                bg-[url('/images/team1.jpg')]
                h-[300px] w-[300px]
                relative
              "
              >
                <div
                  className="bg-neutral-600
                 p-3
                  flex
                  flex-col
                  justify-center
                  absolute
                  bottom-5
                  w-[80%]
                  transform
                  rounded-r-full
                  opacity-70
                 "
                >
                  <div className="ml-4 text-zinc-200">
                    <h2
                      className="text-lg
                    sm:text-2xl
                  "
                    >
                      Kamal Gc
                    </h2>
                    <p className="text-sm sm:text-md">Founder</p>
                  </div>
                </div>
              </div>
              <div
                className="
              z-10 ease-in-out rounded-xl
              transform-gpu
              duration
             hover:scale-95
             hover:shadow-md opacity-80
              bg-cover bg-no-repeat
                bg-[url('/images/team1.jpg')]
                h-[300px] w-[300px]
                relative
              "
              >
                <div
                  className="bg-neutral-600
                 p-3
                  flex
                  flex-col
                  justify-center
                  absolute
                  bottom-5
                  w-[80%]
                  transform
                  rounded-r-full
                  opacity-70
                 "
                >
                  <div className="ml-4 text-zinc-200">
                    <h2
                      className="text-lg
                    sm:text-2xl
                  "
                    >
                      Kamal Gc
                    </h2>
                    <p className="text-sm sm:text-md">Founder</p>
                  </div>
                </div>
              </div>
              <div
                className="
              z-10 ease-in-out rounded-xl
              transform-gpu
              duration
             hover:scale-95
             hover:shadow-md opacity-80
              bg-cover bg-no-repeat
                bg-[url('/images/team1.jpg')]
                h-[300px] w-[300px]
                relative
              "
              >
                <div
                  className="bg-neutral-600
                 p-3
                  flex
                  flex-col
                  justify-center
                  absolute
                  bottom-5
                  w-[80%]
                  transform
                  rounded-r-full
                  opacity-70
                 "
                >
                  <div className="ml-4 text-zinc-200">
                    <h2
                      className="text-lg
                    sm:text-2xl
                  "
                    >
                      Kamal Gc
                    </h2>
                    <p className="text-sm sm:text-md">Founder</p>
                  </div>
                </div>
              </div>
              <div
                className="
              z-10 ease-in-out rounded-xl
              transform-gpu
              duration
             hover:scale-95
             hover:shadow-md opacity-80
              bg-cover bg-no-repeat
                bg-[url('/images/team1.jpg')]
                h-[300px] w-[300px]
                relative
              "
              >
                <div
                  className="bg-neutral-600
                 p-3
                  flex
                  flex-col
                  justify-center
                  absolute
                  bottom-5
                  w-[80%]
                  transform
                  rounded-r-full
                  opacity-70
                 "
                >
                  <div className="ml-4 text-zinc-200">
                    <h2
                      className="text-lg
                    sm:text-2xl
                  "
                    >
                      Kamal Gc
                    </h2>
                    <p className="text-sm sm:text-md">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showBrand && (
            <div
              className="
             grid
             lg:grid-cols-3
             sm:grid-cols-2
             grid-cols-1
             gap-20
            "
            >
              {/* image cols */}
              <div
                className="
              z-10 ease-in-out
              rounded-xl
              transform-gpu
              duration
             hover:scale-95
             hover:shadow-md 
              opacity-80
              bg-cover bg-no-repeat
                bg-[url('/images/team1.jpg')]
                h-[300px] w-[300px]
                relative
              "
              >
                {/* filter list */}
                <div
                  className={`z-50
              bg-zinc-100
              absolute
              w-full
              -top-6
              bg-opacity-90
             shadow-md p-4 ${show ? "" : "hidden"}`}
                >
                  <ul onClick={toggleShow} className="text-center">
                    <li
                      onClick={toggleshowTeam}
                      className="text-[20px] font-normal text-zinc-500 p-1 hover:bg-yellow-400 hover:bg-opacity-70"
                    >
                      Teams
                      <div
                        className="h-[1px]
                       bg-neutral-500
                       mt-2
                       bg-opacity-40"
                      ></div>
                    </li>
                    <li
                      onClick={toggleshowBrand}
                      className="text-[20px] font-normal text-zinc-500 p-1 hover:bg-yellow-400 hover:bg-opacity-70"
                    >
                      Brand Ambassador
                      <div
                        className="h-[1px]
                       bg-neutral-500
                       mt-2
                       bg-opacity-40"
                      ></div>
                    </li>
                    <li
                      onClick={toggleshowInt}
                      className="text-[20px] font-normal text-zinc-500 p-1 hover:bg-yellow-400 hover:bg-opacity-70"
                    >
                      International Team
                    </li>
                  </ul>
                </div>
                <div
                  className="bg-neutral-600
                 p-3
                  flex
                  flex-col
                  justify-center
                  absolute
                  bottom-5
                  w-[80%]
                  transform
                  rounded-r-full
                  opacity-70
                 "
                >
                  <div className="ml-4 text-zinc-200">
                    <h2
                      className="text-lg
                    sm:text-2xl
                  "
                    >
                      Kamal Gc
                    </h2>
                    <p className="text-sm sm:text-md">Founder</p>
                  </div>
                </div>
              </div>
              <div
                className="
              z-10 ease-in-out rounded-xl
              transform-gpu
              duration
             hover:scale-95
             hover:shadow-md opacity-80
              bg-cover
              bg-no-repeat
                bg-[url('/images/team1.jpg')]
                h-[300px] w-[300px]
                relative
              "
              >
                <div
                  className="bg-neutral-600
                 p-3
                  flex
                  flex-col
                  justify-center
                  absolute
                  bottom-5
                  w-[80%]
                  transform
                  rounded-r-full
                  opacity-70
                 "
                >
                  <div className="ml-4 text-zinc-200">
                    <h2
                      className="text-lg
                    sm:text-2xl
                  "
                    >
                      Kamal Gc
                    </h2>
                    <p className="text-sm sm:text-md">Founder</p>
                  </div>
                </div>
              </div>
              <div
                className="
              z-10 ease-in-out rounded-xl
              transform-gpu
              duration
             hover:scale-95
             hover:shadow-md opacity-80
              bg-cover bg-no-repeat
                bg-[url('/images/team1.jpg')]
                h-[300px] w-[300px]
                relative
              "
              >
                <div
                  className="bg-neutral-600
                 p-3
                  flex
                  flex-col
                  justify-center
                  absolute
                  bottom-5
                  w-[80%]
                  transform
                  rounded-r-full
                  opacity-70
                 "
                >
                  <div className="ml-4 text-zinc-200">
                    <h2
                      className="text-lg
                    sm:text-2xl
                  "
                    >
                      Kamal Gc
                    </h2>
                    <p className="text-sm sm:text-md">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {showInt && (
            <div
              className="
             grid
             lg:grid-cols-3
             sm:grid-cols-2
             grid-cols-1
             gap-20
            "
            >
              {/* image cols */}
              <div
                className="
              z-10 ease-in-out
              rounded-xl
              transform-gpu
              duration
             hover:scale-95
             hover:shadow-md 
              opacity-80
              bg-cover bg-no-repeat
                bg-[url('/images/team1.jpg')]
                h-[300px] w-[300px]
                relative
              "
              >
                {/* filter list */}
                <div
                  className={`z-50
              bg-zinc-100
              absolute
              w-full
              -top-6
              bg-opacity-90
             shadow-md p-4 ${show ? "" : "hidden"}`}
                >
                  <ul onClick={toggleShow} className="text-center">
                    <li
                      onClick={toggleshowTeam}
                      className="text-[20px] font-normal text-zinc-500 p-1 hover:bg-yellow-400 hover:bg-opacity-70"
                    >
                      Teams
                      <div
                        className="h-[1px]
                       bg-neutral-500
                       mt-2
                       bg-opacity-40"
                      ></div>
                    </li>
                    <li
                      onClick={toggleshowBrand}
                      className="text-[20px] font-normal text-zinc-500 p-1 hover:bg-yellow-400 hover:bg-opacity-70"
                    >
                      Brand Ambassador
                      <div
                        className="h-[1px]
                       bg-neutral-500
                       mt-2
                       bg-opacity-40"
                      ></div>
                    </li>
                    <li
                      onClick={toggleshowInt}
                      className="text-[20px] font-normal text-zinc-500 p-1 hover:bg-yellow-400 hover:bg-opacity-70"
                    >
                      International Team
                    </li>
                  </ul>
                </div>
                <div
                  className="bg-neutral-600
                 p-3
                  flex
                  flex-col
                  justify-center
                  absolute
                  bottom-5
                  w-[80%]
                  transform
                  rounded-r-full
                  opacity-70
                 "
                >
                  <div className="ml-4 text-zinc-200">
                    <h2
                      className="text-lg
                    sm:text-2xl
                  "
                    >
                      Kamal Gc
                    </h2>
                    <p className="text-sm sm:text-md">Founder</p>
                  </div>
                </div>
              </div>
              <div
                className="
              z-10 ease-in-out rounded-xl
              transform-gpu
              duration
             hover:scale-95
             hover:shadow-md opacity-80
              bg-cover
              bg-no-repeat
                bg-[url('/images/team1.jpg')]
                h-[300px] w-[300px]
                relative
              "
              >
                <div
                  className="bg-neutral-600
                 p-3
                  flex
                  flex-col
                  justify-center
                  absolute
                  bottom-5
                  w-[80%]
                  transform
                  rounded-r-full
                  opacity-70
                 "
                >
                  <div className="ml-4 text-zinc-200">
                    <h2
                      className="text-lg
                    sm:text-2xl
                  "
                    >
                      Kamal Gc
                    </h2>
                    <p className="text-sm sm:text-md">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Teams;
