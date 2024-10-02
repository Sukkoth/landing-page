import { motion } from "framer-motion";

function Phone({
  embedData,
  large = false,
}: {
  embedData: string;
  large?: boolean;
}) {
  const isVideo = embedData?.includes("video") || false;
  const commonProps = {
    className: "h-full w-full rounded-[2rem] object-fill",
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };
  return (
    <div
      className={`h-[560px] w-[280px] overflow-hidden rounded-[2.5rem] border-8 border-stone-700 lg:h-[783px] lg:w-[386px] ${!large ? "xl:hidden" : ""}`}
    >
      {isVideo ? (
        <motion.video src={embedData} {...commonProps} autoPlay loop muted />
      ) : (
        <motion.img src={embedData} alt={`phone`} {...commonProps} />
      )}
    </div>
  );
}

export default Phone;
