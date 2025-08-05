import React from "react"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import NavBar from "./components/NavBar"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"
import Contacts from "./sections/Contacts"
const App = () => {

  return (
   <>
    <NavBar />
    <Hero />
    <Showcase />
    <Experience />
    <TechStack />
    <Contacts />
   </>
  )
}

export default App
