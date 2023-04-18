type Prop = {
  text: string;
  handleClick(): void;
};

const Button = ({ text, handleClick }: Prop) => {
  return (
    <>
      <button className="" onClick={handleClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
