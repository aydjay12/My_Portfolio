// import Test from "./Test";
import "./app.scss";
import { useState, useEffect } from "react";
import ExpandLessIcon from "/expandless.png";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax ";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  // Add a scroll event listener to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        // Show the button when the user has scrolled down 100px
        setShowButton(true);
      } else {
        // Hide the button when the user is at the top of the page
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Cursor></Cursor>
      <section id="Homepage">
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id="About">
        <Parallax type="services"></Parallax>
      </section>
      <section>
        <About></About>
      </section>
      <section id="Services">
        <Services></Services>
      </section>
      <section id="Projects">
        <Parallax type="portfolio"></Parallax>
      </section>
      <Portfolio></Portfolio>
      <section id="Contact">
        <Contact></Contact>
      </section>
      {/* <Test></Test> */}
      {showButton && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          <img src={ExpandLessIcon} alt="Back to Top" width="40" height="40" />
        </button>
      )}
    </div>
  );
};

export default App;
