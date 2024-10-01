import frame1 from "../assets/images/frame-1.png";

function Carousel() {
  return (
    <>
      <div className='mt-32'>
        <h1 className='w-[970px] text-[56px] leading-[60px] px-[60px]'>
          Fluid AI was born out of a desire to simplify and streamline modern
          life
        </h1>
      </div>
      <div className='mt-20 overflow-hidden'>
        {/* {/* <div className='flex flex-row'> */}
        <img src={frame1} alt='frame-1' className='w-full' />
        <img src={frame1} alt='frame-1' className='w-full' />
        <img src={frame1} alt='frame-1' className='w-full' />
        <img src={frame1} alt='frame-1' className='w-full' />
      </div>
    </>
  );
}

export default Carousel;
