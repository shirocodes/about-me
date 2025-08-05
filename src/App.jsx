import React from "react"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import NavBar from "./components/NavBar"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"
import Contacts from "./sections/Contacts"
import Footer from "./sections/Footer"
const App = () => {

  return (
   <>
    <NavBar />
    <Hero />
    <Showcase />
    <Experience />
    <TechStack />
    <Contacts />
    <Footer />
   </>
  )
}

export default App
