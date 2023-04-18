import Input from "../ui/Input";
import Section from "../ui/Section";

const Personal = () => {
  return (
    <>
      <Section heading="Personal">
        <Input labelText="Name" />
        <Input labelText="Email" />
      </Section>
    </>
  );
};

export default Personal;
