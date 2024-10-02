import Phone from "./Phone";
import phone1 from "../assets/images/iPhone (1).png";
import phone2 from "../assets/images/iPhone (2).png";
import phone3 from "../assets/images/iPhone (3).png";
import phone4 from "../assets/images/iPhone (4).png";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

function Features() {
  const images = [phone1, phone2, phone3, phone4];
  const targetRef = useRef(null);

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
        <div className="sticky top-0 h-screen space-y-10 overflow-hidden px-[80px] xl:space-y-20">
          <div className="absolute left-[38%] top-24 h-[446px] w-[220px] rounded-3xl border lg:h-[783px] lg:w-[386px]"></div>
          <motion.div style={{ y }}>
            {Array.from({ length: 4 }, (_, index) => (
              <motion.div
                key={index}
                className={`flex h-[100dvh] flex-col-reverse items-center justify-evenly xl:flex-row xl:items-end xl:gap-10 ${
                  index % 2 === 0 ? "xl:flex-row-reverse" : ""
                }`}
              >
                <div className="relative h-fit w-[380px] pb-10 xl:h-[544px] xl:pb-0">
                  <h1 className="pt-10 text-center text-[32px] xl:pt-0 xl:text-start">
                    Fluid AI: Simplify, Organize, and Achieve More
                  </h1>
                  <p className="pt-10 text-[18px] text-white/50">
                    {" "}
                    In a world where daily tasks, communication, and goals often
                    become overwhelming, Fluid AI offers an innovative solution.
                    Combining advanced AI technology with a user-friendly
                    interface, it brings together to-do lists, chats, saved
                    items, and bucket lists into one seamless platform.
                  </p>
                  <p className="absolute bottom-0 left-0 text-white/50">
                    {index + 1}/4
                  </p>
                </div>
                <div></div>
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
