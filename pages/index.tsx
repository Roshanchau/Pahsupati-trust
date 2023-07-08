import React from "react"
import Navbar from "../components/Navbar"
import SwiperComponent from "../components/SwiperComponent"
import Objectives from "../components/Objectives"
import { Element } from "react-scroll"
import Teams from "../components/Teams"
import Projects from "../components/Projects"
import Stories from "../components/Stories"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


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
      <Element name="Teams">
      <Teams/>
      </Element>
      <Element name="Projects">
      <Projects/>
      </Element>
     
      <Stories/>
      <Element name="Contact">
      <Contact/>
      </Element>
      <Footer/>
    </>
  )
}

export default Home
