import React, { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const growingSpan = useRef(null);
  const heading = useRef(null);
  // const handleClick = (events) => {
  //   console.log(events.clientX, events.clientY);
  //   if (showCanvas) {
  //     setShowCanvas(false);
  //   } else {
  //     setShowCanvas(true);
  //   }
  // };
  useGSAP(() => {}, [showCanvas]);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [showCanvas]);

  useGSAP(() => {
    heading.current.addEventListener("click", (e) => {
      gsap.set(growingSpan.current, {
        top: e.clientY,
        left: e.clientX,
      });
      if (!showCanvas) {
        gsap.to(growingSpan.current, {
          scale: 1000,
          duration: 2,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(growingSpan.current, {
          scale: 0,
          duration: 2,
          ease: "circ.inOut",
        });
      }

      setShowCanvas(!showCanvas);
    });
  }, [showCanvas]);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing fixed top-0 left-[-10px] w-1 h-1 rounded-full block z-[-10]"
      ></span>
      <div className="w-full min-h-screen relative ">
        {showCanvas &&
          data[0].map((canvasDetails, index) => (
            <Canvas details={canvasDetails} />
          ))}
        <div className="w-full h-screen">
          <nav className="py-4 px-4 flex justify-between w-full p-">
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
          <div className="textcontainer px-[20%] w-full ">
            <div className="text w-full md:w-[40%]">
              <h3 className="text-2xl md:text-4xl ">
                AR Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-sm w-[80%] mt-10 font-light md:text-lg">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are beautiful
                and functional
              </p>
            </div>
          </div>
          <div className="">
            <h1
              ref={heading}
              className="text-[6rem] tracking-tight leading-[2] flex justify-center items-center  md:text-[16rem]"
            >
              thirtysixstudio
            </h1>
          </div>
          <div className="w-full h-screen  mt-32 px-10 relative">
            {data[1].map((canvasDetails, index) => (
              <Canvas details={canvasDetails} />
            ))}
            <h1 className="text-4xl">about the brand.</h1>
            <p className="text-xl w-[80%] mt-10 font-light">
              We are a team of designers, developers, and strategists who are
              passionate about creating digital experiences that are beautiful
              and functional. We are a team of designers, developers, and
              strategists who are passionate about creating digital experiences
              that are beautiful and functional
            </p>
          </div>
          <div className="w-full h-screen  relative">
            {data[2].map((canvasDetails, index) => (
              <Canvas details={canvasDetails} />
            ))}{" "}
            <img
              className="w-full h-screen object-cover"
              src="https://images.unsplash.com/photo-1629129281524-b1e1a1a099d2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
