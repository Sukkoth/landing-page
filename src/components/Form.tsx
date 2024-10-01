import JoinForm from "./JoinForm";
import join from "../assets/images/join.png";

function Form() {
  return (
    <div className='mt-10'>
      <div className='relative w-full h-[100dvh]'>
        <img src={join} alt='join-img' className='object-cover h-full w-full' />
        <div className='absolute inset-y-0 left-[80px] top-[140px]'>
          <h1 className='text-[80px] w-[40rem]'>
            Join the Fluid AI Waitlist Today!
          </h1>
          <JoinForm />
        </div>
      </div>
    </div>
  );
}

export default Form;
