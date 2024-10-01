import logo from "../assets/fluid-icon.svg";

function Footer() {
  return (
    <footer className="mt-10 px-[20px] lg:p-[40px]">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <div>
          <img src={logo} alt="logo" className="-ms-3 h-[40px] w-[207px]" />
          <p className="mt-3 text-white/50 lg:mt-6">2024 Fluid AI</p>
        </div>
        <div className="grid grid-cols-2 gap-20 text-[18px] text-white/50">
          <div className="space-y-3">
            <p>Our Features</p>
            <p>Areas</p>
            <p>FAQs</p>
            <p>The Waitlist</p>
            <p>Contact Us</p>
          </div>
          <div className="space-y-3">
            <p>Terms of service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
