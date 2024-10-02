import { useState } from "react";
import logo from "../assets/fluid-icon.svg";
import navMenu from "../assets/nav-menu.svg";

function Intro() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className="grid h-[100dvh] grid-rows-[auto_1fr]">
      {/* for larger devices */}
      <nav className="hidden justify-between px-[40px] pt-[40px] md:flex">
        <div className="flex w-fit gap-10">
          <a>What we believe</a>
          <a>Our Features</a>
        </div>
        <div className="flex w-fit gap-10">
          <a>Our Story</a>
          <a>The waitlist</a>
        </div>
      </nav>

      {/* For small devices */}
      {/* nav bar toggler */}
      <div onClick={() => setToggleNav(true)} className="h-fit w-fit md:hidden">
        <img src={navMenu} alt="navMenu" className="block px-5 pt-5" />
      </div>

      {/* small devices nav bar  */}
      <nav
        className={`fixed top-0 z-10 ml-0 h-full w-[300px] border-r bg-black p-10 transition-all duration-300 md:hidden ${
          toggleNav ? "left-0" : "-left-[800px]"
        }`}
      >
        <div onClick={() => setToggleNav(false)}>
          <img
            src={navMenu}
            alt="navMenu"
            className="float-end block rotate-180"
          />
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <a>What we believe</a>
          <a>Our Features</a>
          <a>Our Story</a>
          <a>The waitlist</a>
        </div>
      </nav>
    </div>
  );
}

export default Intro;
