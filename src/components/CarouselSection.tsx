import Accordion from "./Accordion";

function CarouselSection() {
  return (
    <div className='mt-20 px-[60px] flex justify-between'>
      <div className='w-1/4'>
        <h1 className='text-[56px] leading-[60px]'>
          What can curiosity, wonder, and awe do for you?
        </h1>
        <p className='text-white/50 pt-5'>
          Research shows that experiencing curiosity and awe can immensely
          benefit our mental, physical, and professional health. Here’s a brief
          overview of what curiosity and awe can do for you.
        </p>
      </div>
      <Accordion />
    </div>
  );
}

export default CarouselSection;
