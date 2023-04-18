import Input from "../ui/Input";
import Section from "../ui/Section";

const Experience = () => {
  return (
    <Section heading="Experience">
      <NthExperience />
    </Section>
  );
};

const NthExperience = () => {
  return (
    <div className="flex flex-col">
      <Input labelText="Company" />
      <Input labelText="Location" />
      <Input labelText="Position" />
      <Input labelText="To" />
      <Input labelText="From" />
    </div>
  );
};

export default Experience;
