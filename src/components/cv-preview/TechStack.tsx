import CVSection from "../ui/CVSection";

type Props = {
  stack: string;
};

const TechStack = ({ stack }: Props) => {
  return (
    <CVSection heading="Technology">
      <div>
        <p>Tech Stack</p>
        <p>{stack}</p>
      </div>
    </CVSection>
  );
};

export default TechStack;
