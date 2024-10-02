import { motion } from "framer-motion";

function Phone({ image }: { image: string }) {
  return (
    <div className="h-[560px] w-[280px] overflow-hidden rounded-[2.5rem] border-8 border-stone-700 lg:h-[783px] lg:w-[386px] xl:hidden">
      <motion.img
        src={image}
        alt={`phone`}
        className="h-full w-full rounded-[2rem] border object-fill"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

export default Phone;
