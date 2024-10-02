import { useRef, useState } from "react";
import logo from "../assets/fluid-icon.svg";
import navMenu from "../assets/nav-menu.svg";

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
    <div className="mb-[60vh] h-[160vh]" ref={targetRef}>
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
          <div
            onClick={() => setToggleNav(true)}
            className="h-fit w-fit md:hidden"
          >
            <img src={navMenu} alt="navMenu" className="block px-5 pt-5" />
          </div>

          {/* small devices nav bar  */}
          <nav
            className={`fixed top-0 z-10 ml-0 h-full w-[300px] border-r bg-black p-10 transition-all duration-300 md:hidden ${
              toggleNav ? "left-0" : "-left-[800px]"
            }`}
          >
            <div onClick={() => setToggleNav(false)}>
              <img
                src={navMenu}
                alt="navMenu"
                className="float-end block rotate-180"
              />
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <a>What we believe</a>
              <a>Our Features</a>
              <a>Our Story</a>
              <a>The waitlist</a>
            </div>
          </nav>
        </div>
        <div className="absolute left-1/2 top-1/3 z-20 -translate-x-1/2">
          <div className={`flex items-center justify-center pe-10`}>
            <motion.img
              src={logo}
              alt="flui-logo"
              style={{
                height: useTransform(
                  scrollYProgress,
                  [0, 0.7],
                  ["180px", "48px"],
                ), // Adjust the minimum size as needed
                width: useTransform(
                  scrollYProgress,
                  [0, 0.7],
                  ["840px", "200px"],
                ), // Adjust the minimum size as needed
              }}
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
            <div className="w-[668px]">
              <h1 className="text-[80px] leading-[100px]">
                Unlock Seamless Efficiency
              </h1>
              <button className="h-[52px] w-[167px] rounded-[52px] bg-white text-black shadow-sm shadow-white">
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>
        <div className="h-[35rem]"></div>
        <motion.div style={{ y }} className="">
          <Bright />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
