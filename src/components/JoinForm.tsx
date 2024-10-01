import Select from "./Select";

function JoinForm() {
  return (
    <form className="mt-10 flex flex-col space-y-10">
      <input
        type="text"
        placeholder="Name"
        className="border-b border-b-white/55 bg-transparent pb-2 text-xl outline-none xl:w-[30rem]"
      />
      <input
        type="email"
        placeholder="Email"
        className="border-b border-b-white/55 bg-transparent pb-2 text-xl outline-none xl:w-[30rem]"
      />

      <Select />

      <button className="h-[52px] w-[167px] rounded-[52px] bg-white text-black shadow-sm shadow-white">
        Join Waitlist
      </button>
    </form>
  );
}

export default JoinForm;
