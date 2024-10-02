import { motion } from "framer-motion";

function AccordionItem({ item }: { item: string }) {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="flex cursor-pointer items-start justify-between gap-10 border-b border-b-white/50 pb-2 xl:items-center"
    >
      <p className="text-[18px] lg:text-[22px]">{item}</p>
      <span className="pr-3">+</span>
    </motion.div>
  );
}

export default AccordionItem;
