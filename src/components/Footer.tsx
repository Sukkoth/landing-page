import logo from "../assets/fluid-icon.svg";

function Footer() {
  return (
    <footer className='mt-10 p-[40px]'>
      <div className='flex justify-between'>
        <div>
          <img src={logo} alt='logo' className='w-[207px] h-[40px]' />
          <p className='text-white/50 mt-6 ps-3'>2024 Fluid AI</p>
        </div>
        <div className='grid grid-cols-2 gap-20 text-white/50 text-[18px]'>
          <div className='space-y-3'>
            <p>Our Features</p>
            <p>Areas</p>
            <p>FAQs</p>
            <p>The Waitlist</p>
            <p>Contact Us</p>
          </div>
          <div className='space-y-3'>
            <p>Terms of service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
