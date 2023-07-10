import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
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
      <motion.div className="flex flex-col items-center justify-center py-2 md:py-4 px-4 md:px-6 mt-6">
        <motion.div
          initial={{ y: -100 , opacity:0}}
          whileInView={{ y: 0,opacity:1, transition: { duration: 1 } }}
          className="flex items-center justify-center "
        >
          <h1
            className=" font-normal 
                        md:text-4xl
                        text-[20px]
                        text-center"
          >
            Meet The Team
          </h1>
        </motion.div>
        <motion.div
         initial={{ y: -100}}
         whileInView={{ y: 0, transition: { duration: 1 } }}
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
        </motion.div>
        {/* filter button */}
        <motion.div
         initial={{ y: -100}}
         whileInView={{ y: 0, transition: { duration: 1 } }}
        className="flex sm:hidden items-center justify-center mt-2">
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
          {/* filter list */}
          <div
            className={`z-50
              bg-zinc-100
              absolute
              w-[80%]
              mt-60
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
        </motion.div>

        {!showTeam && (
          <motion.div
          initial={{ y: 100 , opacity:0}}
          whileInView={{ y: 0,opacity:1 , transition: { duration: 0.7 } }}
          className="container  mx-auto">
            <div className="flex items-center justify-center w-full h-full py-20 sm:py-8 px-4">
              {/* Carousel for desktop and large size devices */}
              <CarouselProvider
                className="lg:block hidden"
                naturalSlideHeight={100}
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={4}
                visibleSlides={3}
                isPlaying={true}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                      >
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md "
                            />
                            <div className="bg-gray-800 bg-opacity-20 absolute w-full h-full p-6">
                              <div className="flex flex-col h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Karan Gc{" "}
                                </h3>
                                <p className="text-lg text-white">Founder</p>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={1}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-20 absolute w-full h-full p-6">
                              <div className="flex flex-col h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Karan Gc{" "}
                                </h3>
                                <p className="text-lg text-white">Founder</p>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={2}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-20 absolute w-full h-full p-6">
                              <div className="flex flex-col h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Karan Gc{" "}
                                </h3>
                                <p className="text-lg text-white">Founder</p>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={3}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-20 absolute w-full h-full p-6">
                              <div className="flex flex-col h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Karan Gc{" "}
                                </h3>
                                <p className="text-lg text-white">Founder</p>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
              {/* Carousel for tablet and medium size devices */}
              <CarouselProvider
                className="lg:hidden md:block hidden"
                naturalSlideHeight={0}
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={4}
                visibleSlides={3}
                isPlaying={true}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                      >
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
              {/* Carousel for mobile and Small size Devices */}
              <CarouselProvider
                className="block md:hidden "
                naturalSlideHeight={0}
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={4}
                visibleSlides={1}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                      >
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
            </div>
          </motion.div>
        )}
        {showBrand && (
          <motion.div
          initial={{ y: 100 , opacity:0}}
          whileInView={{ y: 0,opacity:1, transition: { duration: 0.7 } }}
          className="container  mx-auto">
            <div className="flex items-center justify-center w-full h-full py-20 sm:py-8 px-4">
              {/* Carousel for desktop and large size devices */}
              <CarouselProvider
                className="lg:block hidden"
                naturalSlideHeight={0}
                naturalSlideWidth={400}
                isIntrinsicHeight={true}
                totalSlides={4}
                visibleSlides={3}
                isPlaying={true}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                      >
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/Brand1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
              {/* Carousel for tablet and medium size devices */}
              <CarouselProvider
                className="lg:hidden md:block hidden"
                naturalSlideHeight={0}
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={4}
                visibleSlides={3}
                isPlaying={true}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                      >
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
              {/* Carousel for mobile and Small size Devices */}
              <CarouselProvider
                className="block md:hidden "
                naturalSlideHeight={0}
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={4}
                visibleSlides={1}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                      >
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/Brand1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
            </div>
          </motion.div>
        )}
        {showInt && (
          <motion.div 
          initial={{ y: 100 , opacity:0}}
          whileInView={{ y: 0,opacity:1 , transition: { duration: 0.7 } }}
          className="container  mx-auto">
            <div className="flex items-center justify-center w-full h-full py-20 sm:py-8 px-4">
              {/* Carousel for desktop and large size devices */}
              <CarouselProvider
                className="lg:block hidden"
                naturalSlideHeight={0}
                naturalSlideWidth={400}
                isIntrinsicHeight={true}
                totalSlides={4}
                visibleSlides={3}
                isPlaying={true}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                      >
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/Brand1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-10 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/Brand1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-[40vw] h-[300px] rounded-md"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
              {/* Carousel for tablet and medium size devices */}
              <CarouselProvider
                className="lg:hidden md:block hidden"
                naturalSlideHeight={0}
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={4}
                visibleSlides={3}
                isPlaying={true}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                      >
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
              {/* Carousel for mobile and Small size Devices */}
              <CarouselProvider
                className="block md:hidden "
                naturalSlideHeight={0}
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={4}
                visibleSlides={1}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                      >
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/Brand1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                        <Slide index={0}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src="/images/team1.jpg"
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                Catalog 1
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  Minimal Interior
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Teams;
