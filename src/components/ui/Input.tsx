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
    <div className={`flex my-[6px] ${width}`}>
      <label className="pr-4 font-light text-sm" htmlFor={labelText}>
        {labelText}
      </label>
      <input
        className="border-b w-full focus:outline-none focus:border-opacity-70 px-2 font-extralight h-[18px] text-sm leading-none"
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e, property, id)}
      />
    </div>
  );
};

export default Input;
