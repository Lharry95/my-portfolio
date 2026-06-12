import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
