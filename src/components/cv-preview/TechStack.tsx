import CVSection from "../ui/CVSection";

type Props = {
  stack: string;
};

const TechStack = ({ stack }: Props) => {
  return (
    <CVSection heading="">
      <div className="flex font-light text-sm leading-tight w-full">
        <p>Programming Skills:</p>
        <p className="pl-2 font-extralight">{stack}.</p>
      </div>
    </CVSection>
  );
};

export default TechStack;
