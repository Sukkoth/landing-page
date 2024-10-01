import { useState } from "react";

type SelectProps = {
  onSelect?: (value: string) => void;
};

function Select({ onSelect }: SelectProps) {
  const [selected, setSelected] = useState<null | string>(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(value: string) {
    setSelected(value);
    if (onSelect) onSelect(value);
  }

  return (
    <div
      className="relative border-b border-b-white/55 bg-transparent pb-2 text-xl outline-none xl:w-[30rem]"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {selected ? (
        <div>
          <p>{selected}</p>
        </div>
      ) : (
        <PlaceHolder />
      )}
      {isOpen && (
        <div className="w absolute inset-x-0 top-10 z-[9999] h-[20rem] overflow-y-scroll bg-stone-800">
          {countries.map((country) => (
            <Option
              {...country}
              key={country.label}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function PlaceHolder() {
  return <p className="text-slate-400">Country</p>;
}

type OptionProps = {
  value?: string;
  label: string;
  img?: string;
  handleSelect?: (value: string) => void;
};
function Option({ value, label, img, handleSelect }: OptionProps) {
  return (
    <div
      onClick={() => value && handleSelect && handleSelect(value)}
      className="flex items-center gap-4 px-1 py-4 hover:bg-stone-700"
    >
      <img
        src={img}
        alt={`${label}-img`}
        className="size-8 rounded-full border object-cover"
      />
      {label}
    </div>
  );
}

export default Select;

const countries = [
  {
    value: "USA",
    label: "United States",
    img: "https://flagcdn.com/h60/us.png",
  },
  { value: "Canada", label: "Canada", img: "https://flagcdn.com/h60/ca.png" },
  { value: "Mexico", label: "Mexico", img: "https://flagcdn.com/h60/mx.png" },
  {
    value: "United Kingdom",
    label: "United Kingdom",
    img: "https://flagcdn.com/h60/gb.png",
  },
  {
    value: "Germany",
    label: "Germany",
    img: "https://flagcdn.com/h60/de.png",
  },
  { value: "France", label: "France", img: "https://flagcdn.com/h60/fr.png" },
  {
    value: "Australia",
    label: "Australia",
    img: "https://flagcdn.com/h60/au.png",
  },
  { value: "Japan", label: "Japan", img: "https://flagcdn.com/h60/jp.png" },
  { value: "China", label: "China", img: "https://flagcdn.com/h60/cn.png" },
  { value: "India", label: "India", img: "https://flagcdn.com/h60/in.png" },
];
