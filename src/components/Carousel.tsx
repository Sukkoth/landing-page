import HorizontalScrollCarousel from "./HorizontalScrollCarousel";

function Carousel() {
  return (
    <>
      <div className="mt-32">
        <h1 className="px-[20px] text-[32px] leading-[42px] xl:w-[970px] xl:px-[60px] xl:text-[56px] xl:leading-[60px]">
          Fluid AI was born out of a desire to simplify and streamline modern
          life
        </h1>
      </div>
      <HorizontalScrollCarousel />
    </>
  );
}

export default Carousel;
