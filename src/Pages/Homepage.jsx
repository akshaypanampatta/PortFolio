import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Skills from "../Components/Skills/Skills";
import Works from "../Components/Works/Works";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
