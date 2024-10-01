import { useState } from "react";
import logo from "../assets/fluid-icon.svg";
import navMenu from "../assets/nav-menu.svg";

function Intro() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className='grid md:grid-rows-[auto_1fr] h-[100dvh]'>
      {/* for larger devices */}
      <nav className='hidden md:flex justify-between px-[40px] pt-[40px]'>
        <div className='w-fit flex gap-10'>
          <a>What we believe</a>
          <a>Our Features</a>
        </div>
        <div className='w-fit flex gap-10'>
          <a>Our Story</a>
          <a>The waitlist</a>
        </div>
      </nav>

      {/* For small devices */}
      {/* nav bar toggler */}
      <div onClick={() => setToggleNav(true)} className='h-fit w-fit md:hidden'>
        <img src={navMenu} alt='navMenu' className='block pt-5 px-5' />
      </div>

      {/* small devices nav bar  */}
      <nav
        className={`fixed top-0 md:hidden h-full p-10 border-r ml-0 bg-black z-10 w-[300px] duration-300 transition-all  ${
          toggleNav ? "left-0" : "-left-[800px]"
        }`}
      >
        <div onClick={() => setToggleNav(false)}>
          <img src={navMenu} alt='navMenu' className='float-end block' />
        </div>
        <div className=' flex flex-col gap-4 mt-10'>
          <a>What we believe</a>
          <a>Our Features</a>
          <a>Our Story</a>
          <a>The waitlist</a>
        </div>
      </nav>
      <div className={`flex items-center justify-center`}>
        <img
          src={logo}
          alt='flui-logo'
          className='w-[240px] h-[52px] mb-52 lg:w-[840px] lg:h-[180px]'
        />
      </div>
    </div>
  );
}

export default Intro;
