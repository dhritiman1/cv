import { ArrProperty, Projects as P } from "../../util/type";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Section from "../ui/Section";
import TextArea from "../ui/TextArea";

type Props = {
  projects: P[];
  onArrayPropertyChange(e: any, id: string, property: ArrProperty): void;
  onAddProject(): void;
  onDelete(id: string, property: ArrProperty): void;
};

const Projects = ({
  projects,
  onArrayPropertyChange,
  onAddProject,
  onDelete,
}: Props) => {
  return (
    <Section heading="Projects">
      {projects.map((project) => {
        return (
          <NthProject
            key={project.id}
            project={project}
            onChange={onArrayPropertyChange}
            id={project.id}
            onDelete={onDelete}
          />
        );
      })}
      <Button text={"Add Project"} handleClick={onAddProject} />
    </Section>
  );
};

type NthProp = {
  project: P;
  id: string;
  onChange(e: any, property: ArrProperty, id: string): void;
  onDelete(id: string, property: ArrProperty): void;
};

const NthProject = ({ project, id, onChange, onDelete }: NthProp) => {
  return (
    <div className="flex flex-col">
      <Input
        labelText="Title"
        name="title"
        value={project.title}
        property="projects"
        id={id}
        onChange={onChange}
      />
      <Input
        labelText="Github_Link"
        name="link"
        value={project.link}
        property="projects"
        id={id}
        onChange={onChange}
      />
      <TextArea
        labelText="Description"
        name="desc"
        value={project.desc}
        property="projects"
        id={id}
        onChange={onChange}
      />
      <Button
        text={"Delete Project"}
        handleClick={() => onDelete(project.id, "projects")}
      />
    </div>
  );
};

export default Projects;
