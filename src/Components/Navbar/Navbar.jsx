import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 bg-transparent  body-font">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
          <a className="flex  title-font font-medium items-center text-white-900 mb-4 md:mb-0">
            <span className=" logo ml-3  ">PortFolio</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className=" nav mr-5  hover:text-orange-400 text-white ">HOME</a>
            <a className=" nav mr-5  hover:text-orange-400 text-white ">SKILLS</a>
            <a className=" nav mr-5  hover:text-orange-400 text-white ">WORKS</a>
            <a className=" nav mr-5 hover:text-orange-400 text-white ">RESUME</a>
            <a className=" nav mr-5 hover:text-orange-400 text-white ">CONTACT</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar