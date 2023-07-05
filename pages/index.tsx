import React from "react"
import Navbar from "../components/Navbar"
import SwiperComponent from "../components/SwiperComponent"
import Objectives from "../components/Objectives"
import { Element } from "react-scroll"
import Teams from "../components/Teams"


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
      <Teams/>
    </>
  )
}

export default Home
