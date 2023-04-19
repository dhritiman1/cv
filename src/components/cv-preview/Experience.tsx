import { Experience as E } from "../../util/type";
import CVSection from "../ui/CVSection";

type Props = {
  experiences: E[];
};

const Experience = ({ experiences }: Props) => {
  return (
    <CVSection heading="Experience">
      {experiences.map((experience) => {
        return <NthExperiecnce key={experience.id} experience={experience} />;
      })}
    </CVSection>
  );
};

type NthProps = {
  experience: E;
};

const NthExperiecnce = ({ experience }: NthProps) => {
  return (
    <div>
      <div>
        <p>{experience.from}</p>
        <p>{experience.to}</p>
      </div>
      <div>
        <p>
          {experience.position} at {experience.company}
        </p>
        <p>{experience.city}</p>
        <p>{experience.achievements}</p>
      </div>
    </div>
  );
};

export default Experience;
