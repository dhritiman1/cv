import { ArrProperty, Property } from "../../util/type";

type Props = {
  labelText: string;
  name: string;
  value: string;
  width?: string;
  property?: Property | ArrProperty;
  id?: string;
  onChange(e: any, property?: Property | ArrProperty, id?: string): void;
};

const Input = ({
  labelText,
  name,
  value,
  width = "w-full",
  property,
  id,
  onChange,
}: Props) => {
  return (
    <div className={`flex my-[4px] ${width}`}>
      <label className="pr-4 font-light text-[15px]" htmlFor={labelText}>
        {labelText}
      </label>
      <input
        className="border-b w-full focus:outline-none focus:border-opacity-70 px-2 font-light h-[22px] text-sm leading-none text-[#515151]"
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e, property, id)}
      />
    </div>
  );
};

export default Input;
