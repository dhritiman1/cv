import { Projects as P } from "../../util/type";
import CVSection from "../ui/CVSection";
import Li from "../ui/Li";

type Props = {
  projects: P[];
};

const Projects = ({ projects }: Props) => {
  return (
    <CVSection heading="Projects">
      {projects.map((project) => {
        return <NthProject key={project.id} project={project} />;
      })}
    </CVSection>
  );
};

type NthProps = {
  project: P;
};

const NthProject = ({ project }: NthProps) => {
  return (
    <div className="flex font-light text-sm leading-tight w-full">
      <div className="flex w-[80px] pr-3">
        <a href={project.link}>Github</a>
      </div>
      <div>
        <p>{project.title}</p>
        <p>
          {project.desc
            .split("*")
            .slice(1)
            .map((item) => (
              <Li key={item.slice(0, 10)} item={item} />
            ))}
        </p>
      </div>
    </div>
  );
};

export default Projects;
