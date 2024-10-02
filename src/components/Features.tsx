import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import phone1 from "../assets/images/phone-1.png";
import phone2 from "../assets/images/phone-2.png";
import phone3 from "../assets/images/phone-3.png";
import phone4 from "../assets/images/phone-4.png";
import Phone from "./Phone";

function Features() {
  const images = [phone1, phone2, phone3, phone4];
  const targetRef = useRef(null);
  const [display, setDisplay] = useState(0); //which image to display

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["1%", "-77%"]);

  return (
    <>
      <div className="text-center">
        <p className="text-[18px] text-white/50">Our features</p>
        <h1 className="mx-auto px-20 pt-7 text-[32px] leading-[40px] sm:text-[50px] sm:leading-[60px] lg:w-[897px] lg:text-[80px] lg:leading-[80px]">
          Fluid AI was born out of a desire to simplify and streamline modern
          life
        </h1>
      </div>
      <div ref={targetRef} className="mt-20 h-[300vh]">
        <div className="sticky top-0 h-screen space-y-10 overflow-hidden px-[20px] md:px-[30px] xl:space-y-20">
          <div className="absolute left-[38%] top-24 hidden h-[446px] w-[220px] overflow-hidden rounded-[3rem] border-8 border-stone-700 lg:h-[783px] lg:w-[386px] xl:block">
            <motion.img
              key={display}
              src={images[display]}
              alt={`phone-${display + 1}`}
              className="h-full w-full object-fill"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <motion.div style={{ y }}>
            {Array.from({ length: 4 }, (_, index) => (
              <motion.div
                key={index}
                className={`flex flex-col-reverse items-center justify-evenly xl:h-[100dvh] xl:flex-row xl:items-center xl:gap-10 ${
                  index % 2 === 0 ? "xl:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  onViewportEnter={() => setDisplay(index)}
                  className="h-fit w-full pb-10 sm:w-[380px] xl:pb-0"
                >
                  <h1 className="pt-10 text-center text-[32px] xl:pt-0 xl:text-start">
                    Fluid AI: Simplify, Organize, and Achieve More
                  </h1>
                  <p className="pt-10 text-center text-[18px] text-white/50 md:text-start">
                    {" "}
                    In a world where daily tasks, communication, and goals often
                    become overwhelming, Fluid AI offers an innovative solution.
                    Combining advanced AI technology with a user-friendly
                    interface, it brings together to-do lists, chats, saved
                    items, and bucket lists into one seamless platform.
                  </p>
                </motion.div>
                <div className="hidden flex-1 xl:block 2xl:flex-none"></div>
                <Phone image={images[index]} />
                <div className={`hidden w-[375px] xl:block`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Features;
