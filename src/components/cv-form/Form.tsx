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
  onDelete(id: string, property: ArrProperty): void;
};

const Form = ({
  cv,
  onPropertyChange,
  onArrayPropertyChange,
  onTechStackChange,
  onAddExperience,
  onAddProject,
  onDelete,
}: Props) => {
  return (
    <div className="lg:w-[44rem] md:w-[42rem] w-full border flex flex-col items-center py-3 h-[872px] my-3 mt-2 overflow-x-scroll">
      <Personal data={cv.personal} onPropertyChange={onPropertyChange} />
      <Experience
        experiences={cv.experiences}
        onArrayPropertyChange={onArrayPropertyChange}
        onAddExperience={onAddExperience}
        onDelete={onDelete}
      />
      <Projects
        projects={cv.projects}
        onArrayPropertyChange={onArrayPropertyChange}
        onAddProject={onAddProject}
        onDelete={onDelete}
      />
      <Education education={cv.education} onPropertyChange={onPropertyChange} />
      <TechStack stack={cv.techStack} onTechStackChange={onTechStackChange} />
    </div>
  );
};

export default Form;
