import Input from "../ui/Input";
import Section from "../ui/Section";

const Education = () => {
  return (
    <Section heading="Education">
      <Input labelText="Degree" />
      <Input labelText="GPA" />
      <Input labelText="University" />
      <Input labelText="To" />
      <Input labelText="From" />
    </Section>
  );
};

export default Education;
