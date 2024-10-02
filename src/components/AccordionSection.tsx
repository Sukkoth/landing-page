import Accordion from "./Accordion";
import { motion } from "framer-motion";

function AccordionSection() {
  return (
    <div className="mt-20 flex flex-col justify-between px-[20px] lg:flex-row lg:px-[60px]">
      <div className="xl:1/4 pb-10 lg:w-1/3 2xl:pb-0">
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="text-[40px] leading-[40px] xl:text-[56px] xl:leading-[60px]"
        >
          What can curiosity, wonder, and awe do for you?
        </motion.h1>
        <motion.p
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="pt-2 text-white/50 xl:pt-5"
        >
          Research shows that experiencing curiosity and awe can immensely
          benefit our mental, physical, and professional health. Here’s a brief
          overview of what curiosity and awe can do for you.
        </motion.p>
      </div>
      <Accordion />
    </div>
  );
}

export default AccordionSection;
