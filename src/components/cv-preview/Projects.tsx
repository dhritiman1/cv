import { Projects as P } from "../../util/type";
import CVSection from "../ui/CVSection";

type Props = {
  projects: P[];
};

const Projects = ({ projects }: Props) => {
  return (
    <CVSection heading="Projects">
      {projects.map((project) => {
        return <NthProject project={project} />;
      })}
    </CVSection>
  );
};

type NthProps = {
  project: P;
};

const NthProject = ({ project }: NthProps) => {
  return (
    <div>
      <div>{project.link}</div>
      <div>
        <p>{project.title}</p>
        <p>{project.desc}</p>
      </div>
    </div>
  );
};

export default Projects;
