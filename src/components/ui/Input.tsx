import { ArrProperty, Property } from "../../util/type";

type Props = {
  labelText: string;
  name: string;
  value: string;
  property?: Property | ArrProperty;
  id?: string;
  onChange(e: any, property?: Property | ArrProperty, id?: string): void;
};

const Input = ({ labelText, name, value, property, id, onChange }: Props) => {
  return (
    <div className="flex">
      <label htmlFor={labelText}>{labelText}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(e, property, id)}
      />
    </div>
  );
};

export default Input;
