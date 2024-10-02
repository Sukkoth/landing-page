import gradient from "../assets/gradient.svg";

function Brigth() {
  return (
    <div className="min-h-[100dvh]">
      <img
        src={gradient}
        alt="gradient"
        className="h-[60rem] w-full object-cover lg:h-fit"
      />
    </div>
  );
}

export default Brigth;
