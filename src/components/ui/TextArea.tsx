import { ArrProperty, Property } from "../../util/type";

type Props = {
  labelText: string;
  name: string;
  value: string;
  property: ArrProperty;
  id: string;
  onChange(
    e: any,
    property: Property | ArrProperty,
    id?: string | undefined
  ): void;
};

const TextArea = ({
  labelText,
  name,
  property,
  id,
  value,
  onChange,
}: Props) => {
  return (
    <div className="flex my-2 flex-col w-full">
      <label className="pr-5 font-light text-sm" htmlFor={labelText}>
        {labelText}
      </label>
      <textarea
        className="border-b w-full focus:outline-none focus:border-opacity-70 px-2 resize-none font-extralight"
        name={name}
        value={value}
        onChange={(e) => onChange(e, property, id)}
      />
    </div>
  );
};

export default TextArea;
