import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Projects from "./Projects";
import TechStack from "./TechStack";
import { ArrProperty, CVData, Property } from "../../util/type";

type Props = {
  cv: CVData;
  onPropertyChange(e: any, property: Property): void;
  onArrayPropertyChange(e: any, id: string, property: ArrProperty): void;
  onTechStackChange(e: any): void;
};

const Form = ({
  cv,
  onPropertyChange,
  onArrayPropertyChange,
  onTechStackChange,
}: Props) => {
  return (
    <div className="w-[38rem] border p-2 ">
      <Personal data={cv.personal} onPropertyChange={onPropertyChange} />
      <Experience
        experiences={cv.experiences}
        onArrayPropertyChange={onArrayPropertyChange}
      />
      <Projects
        projects={cv.projects}
        onArrayPropertyChange={onArrayPropertyChange}
      />
      <Education education={cv.education} onPropertyChange={onPropertyChange} />
      <TechStack stack={cv.techStack} onTechStackChange={onTechStackChange} />
    </div>
  );
};

export default Form;
