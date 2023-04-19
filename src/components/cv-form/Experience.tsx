import { ArrProperty, Experience as E } from "../../util/type";
import Input from "../ui/Input";
import Section from "../ui/Section";
import TextArea from "../ui/TextArea";

type Props = {
  experiences: E[];
  onArrayPropertyChange(e: any, property: ArrProperty, id: string): void;
};

const Experience = ({ experiences, onArrayPropertyChange }: Props) => {
  return (
    <Section heading="Experience">
      {experiences.map((experience) => {
        return (
          <NthExperience
            key={experience.id}
            experience={experience}
            id={experience.id}
            onChange={onArrayPropertyChange}
          />
        );
      })}
    </Section>
  );
};

type NthProps = {
  experience: E;
  id: string;
  onChange(e: any, property: ArrProperty, id: string): void;
};

const NthExperience = ({ experience, id, onChange }: NthProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Input
          labelText="To"
          name="to"
          value={experience.to}
          width="w-[14rem]"
          property="experiences"
          onChange={onChange}
          id={id}
        />
        <Input
          labelText="From"
          name="from"
          value={experience.from}
          width="w-[14rem]"
          property="experiences"
          onChange={onChange}
          id={id}
        />
      </div>
      <Input
        labelText="Company"
        name="company"
        value={experience.company}
        property="experiences"
        onChange={onChange}
        id={id}
      />
      <Input
        labelText="Location"
        name="city"
        value={experience.city}
        property="experiences"
        onChange={onChange}
        id={id}
      />
      <Input
        labelText="Position"
        name="position"
        value={experience.position}
        property="experiences"
        onChange={onChange}
        id={id}
      />

      <TextArea
        labelText="Achievement"
        name="achievements"
        value={experience.achievements}
        property="experiences"
        onChange={onChange}
        id={experience.id}
      />
    </div>
  );
};

export default Experience;
