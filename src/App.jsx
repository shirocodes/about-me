import React from "react"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import NavBar from "./components/NavBar"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"

const App = () => {

  return (
   <>
    <NavBar />
    <Hero />
    <Showcase />
    <Experience />
    <TechStack />
   </>
  )
}

export default App
