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
  onAddExperience(): void;
  onAddProject(): void;
};

const Form = ({
  cv,
  onPropertyChange,
  onArrayPropertyChange,
  onTechStackChange,
  onAddExperience,
  onAddProject,
}: Props) => {
  return (
    <div className="md:w-[38rem] w-full border flex flex-col items-center pt-3 pb-1 mt-4">
      <Personal data={cv.personal} onPropertyChange={onPropertyChange} />
      <Experience
        experiences={cv.experiences}
        onArrayPropertyChange={onArrayPropertyChange}
        onAddExperience={onAddExperience}
      />
      <Projects
        projects={cv.projects}
        onArrayPropertyChange={onArrayPropertyChange}
        onAddProject={onAddProject}
      />
      <Education education={cv.education} onPropertyChange={onPropertyChange} />
      <TechStack stack={cv.techStack} onTechStackChange={onTechStackChange} />
    </div>
  );
};

export default Form;
