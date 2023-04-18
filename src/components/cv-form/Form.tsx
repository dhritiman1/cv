import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Projects from "./Projects";
import TechStack from "./TechStack";

const Form = () => {
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

export default Form;
