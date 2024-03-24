import About from "./containers/About"
import Contact from "./containers/Contact"
import Experience from "./containers/Experience"
import Hero from "./containers/Hero"
import NavBar from "./components/Navbar"
import Projects from "./containers/Projects"


function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
      
    </>
  )
}

export default App
