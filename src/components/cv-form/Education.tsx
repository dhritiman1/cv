import { Education as E, Property } from "../../util/type";
import Input from "../ui/Input";
import Section from "../ui/Section";

type Props = {
  education: E;
  onPropertyChange(e: any, property: Property): void;
};

const Education = ({ education, onPropertyChange }: Props) => {
  return (
    <Section heading="Education">
      <Input
        labelText="Degree"
        name="degree"
        value={education.degree}
        property="education"
        onChange={onPropertyChange}
      />
      <Input
        labelText="GPA"
        name="gpa"
        value={education.gpa}
        property="education"
        onChange={onPropertyChange}
      />
      <Input
        labelText="University"
        name="university"
        value={education.university}
        property="education"
        onChange={onPropertyChange}
      />
      <Input
        labelText="To"
        name="to"
        value={education.to}
        property="education"
        onChange={onPropertyChange}
      />
      <Input
        labelText="From"
        name="from"
        value={education.from}
        property="education"
        onChange={onPropertyChange}
      />
    </Section>
  );
};

export default Education;
