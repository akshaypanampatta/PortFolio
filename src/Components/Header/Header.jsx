import React from 'react'
import "./Header.css"
import profile from "../../assets/images/profile.jpg"
import {FiDownload} from  "react-icons/fi"
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import {FaInstagramSquare} from "react-icons/fa"
import Resume from "../../assets/AKSHAY_P_Resume.pdf"


const Header = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="title-font sm:text-3xl text-3xl mb-4 font-bold text-white">
              Hello!
            </h3>
            <h1 className=" title title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
              I'm{" "}
              <span style={{ color: "#FB8122", fontWeight: "900" }}>
                AKSHAY
              </span>
            </h1>
            <h2 className="  sub-title title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              I'm a Frontnd Developer
            </h2>
            <p className=" sub-title mb-8 leading-relaxed text-white sm:text-xl">
              Passionate about creating elegant and intuitive user interfaces
              that combine design and functionality.
            </p>
            <a
              href={Resume}
              download="akshay_resume.pdf"
            >
              <button className="resume-button flex items-center justify-center">
                Resume <FiDownload className="ml-2" />
              </button>
            </a>
            <div className="icons">
              <AiFillGithub /> <AiOutlineLinkedin/> <FaInstagramSquare />{" "}
              <AiFillFacebook /> <AiFillTwitterSquare />
            </div>
          </div>

          <div className="w-100 ">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header