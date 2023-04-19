import Input from "../ui/Input";
import Section from "../ui/Section";

type Props = {
  stack: string;
  onTechStackChange(e: any): void;
};

const TechStack = ({ stack, onTechStackChange }: Props) => {
  return (
    <Section heading="Technologies you know">
      <Input
        labelText="Tech_Stack"
        name="techStack"
        value={stack}
        onChange={onTechStackChange}
      />
    </Section>
  );
};

export default TechStack;
