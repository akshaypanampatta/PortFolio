import React from "react";
import { data } from "../../data/data";
import "./Works.css";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";


const Works = () => {
  return (
    <>
      <div data-aos="fade-up" className="relative mb-4 mx-16 ">
        <h3 className=" my-skills text-3xl font-black text-white sm:text-3xl">
          My Works
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      <div className="grid-container ">
        {data.map((data) => (
          <div
            data-aos="zoom-in"
            key={data.id}
            className=" main mt-10  "
            style={{ width: "26rem" }}
          >
            <div className="sub  img-content relative POPUP ">
              <div className="image-container  h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                <img
                  src={data.image}
                  alt={data.title}
                  className=" image  object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>

              <div
                className={` popup  h-[280px] w-fit shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
              >
                <p className=" text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                  {data.desc}
                </p>
                <div className=" flex items-center justify-center gap-4">
                  <a
                    href={data.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Demo</p>
                  </a>
                  <br className="w-[2px] bg-white" />
                  <a
                    href={data.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Code</p>
                  </a>
                </div>
              </div>
              
                <p className="text-white text-xl font-medium mt-3 ms-10 mb-20 sm:text-lg">
                  {data.title}
                </p>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Works;
