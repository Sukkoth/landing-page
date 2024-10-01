import Accordion from "./Accordion";

function AccordionSection() {
  return (
    <div className="mt-20 flex flex-col justify-between px-[20px] lg:flex-row lg:px-[60px]">
      <div className="xl:1/4 pb-10 lg:w-1/3 2xl:pb-0">
        <h1 className="text-[40px] leading-[40px] xl:text-[56px] xl:leading-[60px]">
          What can curiosity, wonder, and awe do for you?
        </h1>
        <p className="pt-2 text-white/50 xl:pt-5">
          Research shows that experiencing curiosity and awe can immensely
          benefit our mental, physical, and professional health. Here’s a brief
          overview of what curiosity and awe can do for you.
        </p>
      </div>
      <Accordion />
    </div>
  );
}

export default AccordionSection;
