import React, { useContext } from "react";
import Profile from "./images/profile-icon.png";
import Gemini from "./images/gemini.png";
import logo from "./images/logo.png";

import {
  Code,
  Compass,
  Globe,
  ImagePlus,
  Laugh,
  Mic,
  Send,
} from "lucide-react";
import { context } from "../../context/Context";
import "./main.css"


const Main = () => {
  const { onSent, recPrompt, showResult, loading, data, input, setInput } =
  useContext(context);
  

  return (
    <div className="flex-1 min-h-[100vh] pb-[15vh] relative">
      <div className="flex items-center justify-between text-2xl p-5 text-[#585858]">
        <p>Chat-AI</p>
        <img className="w-10 rounded-full" src={logo} alt="profile" />
      </div>
      <div className="max-w-4xl m-auto">
        {!showResult ? (
          <>
            <div className="mx-12 my-0 text-5xl bg-linear-65 from-purple-500 to-pink-600 font-medium bg-clip-text text-transparent p-5">
              <p>Hello there..</p>
              <p className="para">How may I help you?</p>
            </div>
            <p className="ml-17 text-gray-500">Below are some suggestions for you..</p>
            <div className="flex flex-wrap gap-3.5 p-5">
              <div className="card h-52 p-3.5 bg-gray-200 rounded-xl relative cursor-pointer w-[180px] hover:bg-gray-300">
                <p className="text-gray-500 text-xl">
                  Suggest some places to visit in India.
                </p>
                <Compass className="w-9 p-1 absolute bottom-2.5 right-2.5 rounded-2xl bg-white" />
              </div>
              <div className="card h-52 p-3.5 bg-gray-200 rounded-xl relative cursor-pointer w-[180px] hover:bg-gray-300">
                <p className="text-gray-500 text-xl">
                  Want some coding suggestions in your code?
                </p>
                <Code className="w-9 p-1 absolute bottom-2.5 right-2.5 rounded-2xl bg-white" />
              </div>
              <div className="card h-52 p-3.5 bg-gray-200 rounded-xl relative cursor-pointer w-[180px] hover:bg-gray-300">
                <p className="text-gray-500 text-xl">
                  Want to know cool facts about Earth?  
                </p>
                <Globe className="w-9 p-1 absolute bottom-2.5 right-2.5 rounded-2xl bg-white" />
              </div>
              <div className="card h-52 p-3.5 bg-gray-200 rounded-xl relative cursor-pointer w-[180px] hover:bg-gray-300">
                <p className="text-gray-500 text-xl">Want to hear a joke</p>
                <Laugh className="w-9 p-1 absolute bottom-2.5 right-2.5 rounded-2xl bg-white" />
              </div>
            </div>
          </>
        ) : (
          <div className="result py-0 px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="my-10 mx-0 flex items-center gap-5">
              <img className="w-15 rounded-2xl" src={Profile} alt="" />
              <p>{recPrompt}</p>
            </div>
            <div className="flex items-start gap-5">
              <img className="w-10" src={Gemini} alt="" />
              {loading ? (
                <div className="w-full flex flex-col gap-2.5">
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-linear-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] h-5" />
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-linear-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] h-5" />
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-linear-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] h-5" />
                </div>
              ) : (
                <p className="text-base/loose font-light " dangerouslySetInnerHTML={{ __html: data }}></p>
              )}
            </div>
          </div>
        )}
        <div className="absolute bottom-0 w-full max-w-[900px] px-0 py-5 m-auto">
          <div className="search flex items-center justify-between gap-5 bg-gray-100 py-2.5 px-5 rounded-[50px]">
            <input
              className="flex-1 w-full bg-transparent border-none outline-none p-2 text-xl"
              type="text"
              placeholder="enter prompt.."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div className="flex items-center gap-3.5">
              <ImagePlus className="w-5 lg:w-6 cursor-pointer" />
              <Mic className="w-5 lg:w-6 cursor-pointer" />
              <Send
                className="w-6 cursor-pointer hover:text-blue-700"
                onClick={() => onSent()}
              />
            </div>
          </div>
          <p className="text-xs my-4 mx-auto text-center font-light">
            &#169; Created by Ayush Sharma
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
