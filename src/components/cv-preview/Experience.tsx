import { Experience as E } from "../../util/type";
import CVSection from "../ui/CVSection";
import Li from "../ui/Li";

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
    <div className="flex font-light text-sm leading-tight w-full">
      <div className="flex w-[80px] pr-3">
        <p>{experience.from}</p>
        <p className="px-[1px]">-</p>
        <p>{experience.to}</p>
      </div>
      <div className="">
        <p>
          {experience.position} at {experience.company}
        </p>
        <p className="font-extralight italic">{experience.city}</p>
        <div>
          {experience.achievements
            .split("*")
            .slice(1)
            .map((item) => (
              <Li key={item.slice(0, 10)} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
