import React, { useEffect } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    console.log(locomotiveScroll.scroll);
  });
  return (
    <>
      <div className="w-full min-h-screen relative">
        {data[0].map((canvasDetails, index) => (
          <Canvas details={canvasDetails} />
        ))}
        <div className="w-full h-screen">
          <nav className="fixed left-0 top-0 py-4 px-4 flex justify-between w-full p-">
            <div className="text-lg font-semibold">thirtysixstudio.</div>
            <ul className="flex space-x-4 text-sm">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default App;
