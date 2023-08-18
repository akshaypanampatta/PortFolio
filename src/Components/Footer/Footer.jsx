import React from "react";
import "./Footer.css";
import { BiLogoTelegram, BiLogoWhatsapp } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="p-2 w-full pt-4 mt-8 border-t border-gray-200 text-center">
          <h1 className="text-white text-4xl footer">Let's Talk</h1>
          <div className="flex justify-center items-center mt-4">
            <a
              href="https://telegram.me/akshaypanampatta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex flex-col items-center mx-4 footer-icon"
            >
              <BiLogoTelegram className="text-3xl" />
              <span className="mt-2">Telegram</span>
            </a>
            <a
              href="https://wa.me/9645659598"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex flex-col items-center mx-4 footer-icon"
            >
              <BiLogoWhatsapp className="text-3xl" />
              <span className="mt-2">WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/akshay_panampatta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex flex-col items-center mx-4 footer-icon"
            >
              <IoLogoInstagram className="text-3xl" />
              <span className="mt-2">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
