type Prop = {
  text: string;
  handleClick(): void;
};

const Button = ({ text, handleClick }: Prop) => {
  return (
    <>
      <button
        className="font-light border bg-[#f0f3f9] active:bg-[#f7faff] active:text-[#4e4e4e] mx-2 my-1 text-[14px]"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
