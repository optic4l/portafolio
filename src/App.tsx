import NavBar from "./components/Navbar";
import TechStack from "./components/TechStack";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Hero from "./containers/Hero";
import Projects from "./containers/Projects";

function App() {
  return (
    <div className=" min-h-dvh flex-col bg-jaguar-950 px-[10%] text-jaguar-50">
      <header className="sticky top-0">
        <NavBar />
      </header>
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
