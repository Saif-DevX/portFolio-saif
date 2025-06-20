import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="pt-15">
        <Hero />
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;





























