import React from "react";
import SwiperComponent from "../components/SwiperComponent";
import Objectives from "../components/Objectives";
import { Element } from "react-scroll";
import Teams from "../components/Teams";
import Projects from "../components/Projects";
import Stories from "../components/Stories";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div  >
          <SwiperComponent />
        <Element name="Objectives">
          <Objectives />
        </Element>
        <Element name="Teams">
          <Teams />
        </Element>
        <Element name="Projects">
          <Projects />
        </Element>

        <Stories />
        <Element name="Contact">
          <Contact />
        </Element>
      </motion.div>
    </>
  );
};

export default Home;
