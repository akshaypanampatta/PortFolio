import React from "react";
import "./Header.css";
import profile from "../../assets/images/profile.png";
import { FiDownload } from "react-icons/fi";
import {
  AiFillGithub,
  AiFillInstagram,
 
} from "react-icons/ai";

import { BiLogoLinkedin } from "react-icons/bi";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import Resume from "../../assets/AKSHAY_P_Resume.pdf";

const Header = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="  lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="title-font sm:text-3xl text-3xl mb-4 font-bold text-white">
              Hello!
            </h3>
            <h1 className=" title title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
              <span>
                I'm{" "}
                <span style={{ color: "#FB8122", fontWeight: "900" }}>
                  AKSHAY
                </span>
              </span>
            </h1>
            <h2 className="  sub-title title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              I'm a Frontnd Developer
            </h2>
            <p className=" sub-title mb-8 leading-relaxed text-white sm:text-xl">
              Passionate about creating elegant and intuitive user interfaces
              that combine design and functionality.
            </p>
            <a href={Resume} download="akshay_resume.pdf">
              <button className="resume-button flex items-center justify-center">
                Resume <FiDownload className="ml-2" />
              </button>
            </a>
            <div className="icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/akshaypanampatta"
              >
                <AiFillGithub className="icon-git" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/akshay-panampatta-89490118b/"
              >
                <BiLogoLinkedin className="icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/akshay_panampatta/"
              >
                <AiFillInstagram className="icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/akshaypaanampatta.akshaypaanampatta/"
              >
                <BsFacebook className="icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Akshay405345277"
              >
                <BsTwitter className="icon" />
              </a>
            </div>
          </div>

          <div className="profile ">
            <img
              className=" picture object-cover object-center rounded "
              src={profile}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
