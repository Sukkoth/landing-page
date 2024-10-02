import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import frame1 from "../assets/images/frame-1.png";
import frame2 from "../assets/images/frame-2.png";
import frame3 from "../assets/images/frame-3.png";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const frames = [frame1, frame2, frame3];

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-160%"]);

  return (
    <>
      <section
        ref={targetRef}
        className="relative mt-5 hidden h-[300vh] bg-neutral-900 xl:mt-20 xl:flex"
      >
        <div className="sticky top-0 h-screen items-start overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {frames.map((frame, index) => {
              return <Card key={index} img={frame} />;
            })}
          </motion.div>
        </div>
      </section>

      <section className="space-y-5 xl:hidden">
        {frames.map((frame) => {
          return <Card key={frame} img={frame} />;
        })}
      </section>
    </>
  );
};

const Card = ({ img }: { img: string }) => {
  return (
    <img
      src={img}
      alt="frame"
      className="h-[700px] w-screen object-cover xl:h-screen"
    />
  );
};
export default HorizontalScrollCarousel;
