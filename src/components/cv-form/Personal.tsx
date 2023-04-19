import { Personal as P, Property } from "../../util/type";
import Input from "../ui/Input";
import Section from "../ui/Section";

type Props = {
  data: P;
  onPropertyChange(e: any, property: Property): void;
};

const Personal = ({ data, onPropertyChange }: Props) => {
  return (
    <>
      <Section heading="Personal">
        <Input
          labelText="Name"
          name="name"
          value={data.name}
          property="personal"
          onChange={onPropertyChange}
        />
        <Input
          labelText="Email"
          name="email"
          value={data.email}
          property="personal"
          onChange={onPropertyChange}
        />
      </Section>
    </>
  );
};

export default Personal;
