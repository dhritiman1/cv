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
    <div>
      <Personal data={cv.personal} />
      <Experience experiences={cv.experiences} />
      <Projects projects={cv.projects} />
      <Education education={cv.education} />
      <TechStack stack={cv.techStack} />
    </div>
  );
};

export default Preview;
