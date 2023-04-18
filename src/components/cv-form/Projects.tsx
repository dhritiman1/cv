import Input from "../ui/Input";
import Section from "../ui/Section";
import TextArea from "../ui/TextArea";

const Projects = () => {
  return (
    <Section heading="Projects">
      <NthProject />{" "}
    </Section>
  );
};

const NthProject = () => {
  return (
    <div className="flex flex-col">
      <Input labelText="Title" />
      <Input labelText="Github Link" />
      <TextArea labelText="Description" />
    </div>
  );
};

export default Projects;
