import About from "./components/About/About";
import Contact from "./components/Contact/Contact.jsx";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
