import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
      <Footer />
    </div>
  );
};


export default App;
