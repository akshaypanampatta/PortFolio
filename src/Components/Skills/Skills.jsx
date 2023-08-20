import React from "react";
import "./Skills.css";

import reactVideo from "../../assets/videos/reactVideo.mp4";
import htmlVideo from "../../assets/videos/htmlVideo.mp4";
import jsVideo from "../../assets/videos/jsVideo.mp4";
import cssVideo from "../../assets/videos/cssVideo.mp4";

const Skills = () => {
  return (
    <>
      <section id="skills" class="text-gray-600 body-font skills">
        <div class="container px-5 py-5 mx-auto">
          <div data-aos="fade-up" className="relative mb-14 ">
            <h3 className=" my-skills text-3xl font-black text-white sm:text-3xl">
              My Skills
            </h3>
            <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
          </div>
          <div
            data-aos="fade-up"
            class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
          >
            <div class="sm:w-36 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
              <video loop muted autoPlay className="">
                <source src={reactVideo} type="video/mp4"></source>
              </video>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-orange-500 text-3xl font-bold title-font  mb-2 ">
                React Js
              </h2>
              <p class="leading-relaxed text-base text-white">
                Proficient in building interactive user interfaces and dynamic
                web applications using React.js. Skilled in component-based
                architecture, state management, and integrating APIs to create
                seamless user experiences.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
          >
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-orange-500 text-3xl title-font font-bold  mb-2">
                Javasript
              </h2>
              <p class="leading-relaxed text-base text-white">
                Strong understanding of JavaScript fundamentals and its role in
                creating dynamic and interactive web content. Capable of
                utilizing libraries and frameworks to streamline development
                processes and enhance user interactivity.
              </p>
            </div>
            <div class="sm:w-36 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
              <video loop muted autoPlay className="">
                <source src={jsVideo} type="video/mp4"></source>
              </video>
            </div>
          </div>

          <div
            data-aos="fade-up"
            class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col"
          >
            <div class="sm:w-36 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
              <video loop muted autoPlay className="">
                <source src={htmlVideo} type="video/mp4"></source>
              </video>
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-orange-500 text-2xl font-bold title-font  mb-2">
                HTML
              </h2>
              <p class="leading-relaxed text-base text-white">
                Well-versed in crafting structured and semantic HTML markup to
                create the foundation of web pages. Knowledgeable about
                accessibility standards and the latest HTML5 features to enhance
                website functionality.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            class="flex items-center lg:w-3/5 mx-auto border-t pt-10 mt-10 border-gray-200 sm:flex-row flex-col"
          >
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-orange-500 text-2xl title-font font-bold mb-2">
                CSS
              </h2>
              <p class="leading-relaxed text-base text-white">
                Experienced in styling web applications with CSS to achieve
                visually appealing and responsive designs. Proficient in layout
                techniques, CSS pre-processors, and adapting designs for various
                screen sizes.
              </p>
            </div>
            <div class="sm:w-36 sm:order-none order-first sm:h-32 h-32 w-32 sm:ml-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
              <video loop muted autoPlay className="">
                <source src={cssVideo} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
