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
      <select
        name="country"
        id="country"
        className="border-b border-b-white/55 bg-transparent pb-2 text-xl text-white outline-none xl:w-[30rem]"
      >
        <option value="USA" className="text-white">
          <img
            src="https://flagcdn.com/16x12/us.png"
            srcSet="https://flagcdn.com/32x24/us.png 2x,
                      https://flagcdn.com/48x36/us.png 3x"
            width="16"
            height="12"
            alt="USA"
          />
          United States
        </option>
        <option value="Canada" className="text-white">
          <img
            src="https://flagcdn.com/16x12/ca.png"
            srcSet="https://flagcdn.com/32x24/ca.png 2x,
                      https://flagcdn.com/48x36/ca.png 3x"
            width="16"
            height="12"
            alt="Canada"
          />
          Canada
        </option>
        <option value="Mexico" className="text-white">
          <img
            src="https://flagcdn.com/16x12/mx.png"
            srcSet="https://flagcdn.com/32x24/mx.png 2x,
                      https://flagcdn.com/48x36/mx.png 3x"
            width="16"
            height="12"
            alt="Mexico"
          />
          Mexico
        </option>
        <option value="United Kingdom" className="text-white">
          <img
            src="https://flagcdn.com/16x12/gb.png"
            srcSet="https://flagcdn.com/32x24/gb.png 2x,
                      https://flagcdn.com/48x36/gb.png 3x"
            width="16"
            height="12"
            alt="United Kingdom"
          />
          United Kingdom
        </option>
        <option value="Germany" className="text-white">
          <img
            src="https://flagcdn.com/16x12/de.png"
            srcSet="https://flagcdn.com/32x24/de.png 2x,
                      https://flagcdn.com/48x36/de.png 3x"
            width="16"
            height="12"
            alt="Germany"
          />
          Germany
        </option>
        <option value="France" className="text-white">
          <img
            src="https://flagcdn.com/16x12/fr.png"
            srcSet="https://flagcdn.com/32x24/fr.png 2x,
                      https://flagcdn.com/48x36/fr.png 3x"
            width="16"
            height="12"
            alt="France"
          />
          France
        </option>
        <option value="Australia" className="text-white">
          <img
            src="https://flagcdn.com/16x12/au.png"
            srcSet="https://flagcdn.com/32x24/au.png 2x,
                      https://flagcdn.com/48x36/au.png 3x"
            width="16"
            height="12"
            alt="Australia"
          />
          Australia
        </option>
        <option value="Japan" className="text-white">
          <img
            src="https://flagcdn.com/16x12/jp.png"
            srcSet="https://flagcdn.com/32x24/jp.png 2x,
                      https://flagcdn.com/48x36/jp.png 3x"
            width="16"
            height="12"
            alt="Japan"
          />
          Japan
        </option>
        <option value="China" className="text-white">
          <img
            src="https://flagcdn.com/16x12/cn.png"
            srcSet="https://flagcdn.com/32x24/cn.png 2x,
                      https://flagcdn.com/48x36/cn.png 3x"
            width="16"
            height="12"
            alt="China"
          />
          China
        </option>
        <option value="India" className="text-white">
          <img
            src="https://flagcdn.com/16x12/in.png"
            srcSet="https://flagcdn.com/32x24/in.png 2x,
                      https://flagcdn.com/48x36/in.png 3x"
            width="16"
            height="12"
            alt="India"
          />
          India
        </option>
      </select>
      <button className="h-[52px] w-[167px] rounded-[52px] bg-white text-black shadow-sm shadow-white">
        Join Waitlist
      </button>
    </form>
  );
}

export default JoinForm;
