import JoinForm from "./JoinForm";
import join from "../assets/images/join.png";

function Form() {
  return (
    <div className="mt-10">
      <div className="relative h-[100dvh] w-full">
        <img src={join} alt="join-img" className="h-full w-full object-cover" />
        <div className="absolute inset-x-0 inset-y-0 top-[50px] px-[20px] xl:left-[80px] xl:top-[140px]">
          <h1 className="w-[96%] text-[32px] xl:w-[40rem] xl:text-[80px]">
            Join the Fluid AI Waitlist Today!
          </h1>
          <JoinForm />
        </div>
      </div>
    </div>
  );
}

export default Form;
