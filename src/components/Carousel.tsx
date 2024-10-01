import frame1 from "../assets/images/frame-1.png";

function Carousel() {
  return (
    <>
      <div className="mt-32">
        <h1 className="px-[20px] text-[32px] leading-[42px] xl:w-[970px] xl:px-[60px] xl:text-[56px] xl:leading-[60px]">
          Fluid AI was born out of a desire to simplify and streamline modern
          life
        </h1>
      </div>
      <div className="mt-5 xl:mt-20">
        <img
          src={frame1}
          alt="frame-1"
          className="h-[700px] w-full object-cover"
        />
        {/* <img src={frame1} alt='frame-1' className='w-full' />
        <img src={frame1} alt='frame-1' className='w-full' />
        <img src={frame1} alt='frame-1' className='w-full' /> */}
      </div>
    </>
  );
}

export default Carousel;
