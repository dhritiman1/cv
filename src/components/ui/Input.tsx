type Props = {
  labelText: string;
};

const Input = ({ labelText }: Props) => {
  return (
    <div className="flex">
      <label htmlFor={labelText}>{labelText}</label>
      <input type="text" />
    </div>
  );
};

export default Input;
