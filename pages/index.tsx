import React from "react"
import Navbar from "../components/Navbar"
import SwiperComponent from "../components/SwiperComponent"
import Objectives from "../components/Objectives"
import { Element } from "react-scroll"


const Home = () => {

  return (
    <>
      <Navbar/>
      <Element name="SwiperComponent">
      <SwiperComponent/>
      </Element>
      <Element name="Objectives">
      <Objectives/>
      </Element>
    </>
  )
}

export default Home
