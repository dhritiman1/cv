import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Projects from "./Projects";
import TechStack from "./TechStack";

const Preview = () => {
  return (
    <div>
      <Personal />
      <Experience />
      <Projects />
      <Education />
      <TechStack />
    </div>
  );
};

export default Preview;
