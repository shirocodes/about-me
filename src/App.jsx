import React from "react"
import Hero from "./sections/Hero"
import AnimatedCounter from "./components/AnimatedCounter"
import Showcase from "./sections/Showcase"
import NavBar from "./components/NavBar"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"
import Contacts from "./sections/Contacts"
import Footer from "./sections/Footer"
import { SpeedInsights } from "@vercel/speed-insights/react";
const App = () => {

  return (
   <>
    <NavBar />
    <Hero />
    <AnimatedCounter /> 
    <Showcase />
    <Experience />
    <TechStack />
    <Contacts />
    <Footer />

    <SpeedInsights/>
   </>
  )
}

export default App
