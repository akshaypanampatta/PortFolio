import React from "react";
import "./Contact.css";
import { FiSend } from "react-icons/fi";


const Contact = () => {
  return (
    <>
      <div>
        <div data-aos="fade-up" className="relative mt-14 mx-20 ">
          <h3 className=" my-skills text-3xl font-black text-white sm:text-3xl">
            Contact
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        <section className="text-white body-font relative">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="contact sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
                Need a Stunning Website <span className="text-orange-500">Design?</span>
              </h1>
              <p className="contact-sub lg:w-2/3 mx-auto leading-relaxed ">
                Request a Beautifully Crafted Website for Your Business
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" className="leading-7 text-sm text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="send-button mx-auto flex items-center justify-center">
                    Send <FiSend className="ml-2" />
                  </button>
                </div>
               
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
