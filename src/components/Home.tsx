import { useRef, useState } from "react";
import logo from "../assets/fluid-icon.svg";
import openNavIcon from "../assets/nav-menu.svg";
import closeNavIcon from "../assets/closeNav.svg";

// import Intro from "./Intro";
import Bright from "./Bright";
import { useScroll, motion, useTransform } from "framer-motion";

function Home() {
  const targetRef = useRef(null);
  const [toggleNav, setToggleNav] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <div className="mb-[20rem] h-[160vh] lg:mb-[60vh]" ref={targetRef}>
      <div className="sticky top-0 h-screen">
        <div className="absolute top-0 z-[9999] grid h-[100dvh] w-full grid-rows-[auto_1fr]">
          {/* for larger devices */}
          <nav className="hidden justify-between px-[40px] pt-[40px] md:flex">
            <div className="flex w-fit gap-10">
              <a>What we believe</a>
              <a>Our Features</a>
            </div>
            <div className="flex w-fit gap-10">
              <a>Our Story</a>
              <a>The waitlist</a>
            </div>
          </nav>

          {/* For small devices */}
          {/* nav bar toggler */}
          <div className="">
            <div
              onClick={() => setToggleNav((prev) => !prev)}
              className="z-50 float-end h-fit w-fit md:hidden"
            >
              <img
                src={toggleNav ? closeNavIcon : openNavIcon}
                alt="navMenu"
                className="block px-5 pt-5"
              />
            </div>
          </div>

          {/* small devices nav bar  */}
          <nav
            className={`fixed bottom-32 z-10 ml-0 h-[79%] w-full bg-black p-10 text-center transition-all duration-300 md:hidden ${
              toggleNav ? "right-0" : "-right-[800px]"
            }`}
          >
            {/* <div onClick={() => setToggleNav(false)}>
              <img
                src={closeNavIcon}
                alt="navMenu"
                className="float-end block rotate-180"
              />
            </div> */}
            <div className="flex flex-col gap-4 text-2xl">
              <a href="#">What we believe</a>
              <a href="#">Our Features</a>
              <a href="#">Our Story</a>
              <a href="#">The waitlist</a>
            </div>
          </nav>
        </div>
        <div className="absolute left-1/2 top-1/3 z-20 -translate-x-1/2">
          <div className={`flex items-center justify-center lg:pe-10`}>
            <motion.img
              src={logo}
              alt="flui-logo"
              className="hidden lg:block"
              style={{
                height: useTransform(
                  scrollYProgress,
                  [0, 0.7],
                  ["180px", "48px"],
                ), // Adjust the minimum size as needed
                width: useTransform(
                  scrollYProgress,
                  [0, 0.7],
                  ["600px", "200px"],
                ), // Adjust the minimum size as needed
                maxWidth: "100%", // Ensure the logo doesn't exceed the container width on mobile
              }}
            />
            <img
              src={logo}
              alt="flui-logo"
              className="mt-20 flex h-[30px] w-[240px] sm:h-[52px] lg:hidden"
            />
          </div>
          <motion.div
            className="flex items-center justify-center text-center"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.7], [0, 1]),
              translateY: useTransform(
                scrollYProgress,
                [0, 0.7],
                ["100%", "0%"],
              ),
            }}
          >
            <div className="w-[300px] md:w-[668px]">
              <h1 className="mt-5 text-[30px] leading-[40px] sm:text-[40px] md:text-[60px] md:leading-[70px] lg:text-[80px] lg:leading-[100px]">
                Unlock Seamless Efficiency
              </h1>
              <button className="mt-5 h-[40px] w-[130px] rounded-[52px] bg-white text-black shadow-sm shadow-white lg:h-[52px] lg:w-[167px]">
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>
        <div className="h-[35rem]"></div>
        <motion.div style={{ y }} className="overflow-hidden">
          <Bright />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
