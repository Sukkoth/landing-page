import { useRef, useState } from "react";
import logo from "../assets/fluid-icon.svg";
import openNavIcon from "../assets/nav-menu.svg";
import closeNavIcon from "../assets/closeNav.svg";

import todo from "../assets/cards/todo.svg";
import todo2 from "../assets/cards/todo2.svg";
import tab from "../assets/cards/tab.svg";
import card from "../assets/cards/card.svg";
import newTicket from "../assets/cards/new-ticket.svg";
import tripIdeas from "../assets/cards/trip-ideas.svg";
import bookFlight from "../assets/cards/book-flight.svg";
import reservation from "../assets/cards/reservation.svg";
import cafe from "../assets/cards/cafe.svg";
import event from "../assets/cards/event.png";

// import Intro from "./Intro";
import Bright from "./Bright";
import { useScroll, motion, useTransform } from "framer-motion";

function Home() {
  const targetRef = useRef(null);
  const [toggleNav, setToggleNav] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <div className="mb-[20rem] h-[230vh] lg:mb-[60vh]" ref={targetRef}>
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
                  [0, 0.3],
                  ["180px", "48px"],
                ), // Adjust the minimum size as needed
                width: useTransform(
                  scrollYProgress,
                  [0, 0.3],
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
              opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
              translateY: useTransform(
                scrollYProgress,
                [0, 0.3],
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

        <div className="">
          {/* <motion.img
            src={todo}
            alt="todo"
            className="absolute z-[999]"
            style={{
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["430px", "430px"],
              ),
              left: useTransform(scrollYProgress, [0.3, 0.6], ["0px", "5px"]),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          /> */}

          <motion.img
            id="cafe"
            src={tab}
            alt="tab"
            className="absolute z-[999]"
            style={{
              left: useTransform(scrollYProgress, [0.3, 0.6], ["0px", "460px"]),
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["680px", "680px"],
              ),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          />

          <motion.img
            id="clapDubai"
            src={card}
            alt="card"
            className="absolute z-[999]"
            style={{
              left: useTransform(scrollYProgress, [0.3, 0.6], ["0px", "197px"]),
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["130px", "130px"],
              ),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          />

          <motion.img
            id="renew-car-insurance"
            src={todo2}
            alt="todo-2"
            className="absolute z-[999]"
            style={{
              left: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["-800px", "-60px"],
              ),
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["440px", "440px"],
              ),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          />
          <motion.img
            id="event-left"
            src={event}
            alt="todo-2"
            className="absolute z-[999]"
            style={{
              left: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["-400px", "0px"],
              ),
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["580px", "580px"],
              ),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          />

          <motion.img
            id="newTicket"
            src={newTicket}
            alt="new-ticket"
            className="absolute z-[999]"
            style={{
              left: useTransform(scrollYProgress, [0.3, 0.6], ["0", "174px"]),
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["785px", "785px"],
              ),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          />

          <motion.img
            id="renew-car-insurance"
            src={todo2}
            alt="todo-2"
            className="absolute z-[999]"
            style={{
              right: useTransform(scrollYProgress, [0.3, 0.6], ["0", "340px"]),
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["142px", "142px"],
              ),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          />

          <motion.img
            id="event-right"
            src={event}
            alt="todo-2"
            className="absolute z-[999]"
            style={{
              right: useTransform(scrollYProgress, [0.3, 0.6], ["0", "170px"]),
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["260px", "260px"],
              ),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          />

          <motion.img
            id="book-a-flight"
            src={bookFlight}
            alt="bookFlight"
            className="absolute z-[999]"
            style={{
              right: useTransform(scrollYProgress, [0.3, 0.6], ["0", "10px"]),
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["520px", "520px"],
              ),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          />

          <motion.img
            id="trip-ideas"
            src={tripIdeas}
            alt="tripIdeas"
            className="absolute z-[999]"
            style={{
              right: useTransform(scrollYProgress, [0.3, 0.6], ["0px", "80px"]),
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["600px", "600px"],
              ),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          />

          <motion.img
            src={reservation}
            alt="reservation"
            className="absolute z-[999]"
            style={{
              right: useTransform(scrollYProgress, [0.3, 0.6], ["0", "270px"]),
              top: useTransform(
                scrollYProgress,
                [0.3, 0.6],
                ["660px", "660px"],
              ),
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          />
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
