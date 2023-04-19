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
    <div className="flex">
      <label htmlFor={labelText}>{labelText}</label>
      <textarea
        name={name}
        value={value}
        onChange={(e) => onChange(e, property, id)}
      />
    </div>
  );
};

export default TextArea;
