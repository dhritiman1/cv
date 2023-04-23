import { CVData } from "../../util/type";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Projects from "./Projects";
import TechStack from "./TechStack";

type Props = {
  cv: CVData;
};

const Preview = ({ cv }: Props) => {
  return (
    <div className="w-[44rem] border flex flex-col items-center py-3 h-[872px] my-3 mt-2">
      <Personal data={cv.personal} />
      {cv.experiences.length !== 0 && (
        <Experience experiences={cv.experiences} />
      )}
      <Projects projects={cv.projects} />
      <Education education={cv.education} />
      <TechStack stack={cv.techStack} />
    </div>
  );
};

export default Preview;
