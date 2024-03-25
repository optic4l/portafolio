import About from "./containers/About"
import Contact from "./containers/Contact"
import Experience from "./containers/Experience"
import Hero from "./containers/Hero"
import NavBar from "./components/Navbar"
import Projects from "./containers/Projects"

function App() {

  return (
    <main className='bg-dark-blue flex-col h-dvh text-white'>
      <NavBar />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  )
}

export default App
