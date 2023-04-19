export type CVData = {
  personal: Personal;
  experiences: Experience[];
  projects: Projects[];
  education: Education;
  techStack: string;
};

export type ArrProperty = "experiences" | "projects";

export type Property = "personal" | "education";

export type Personal = { name: string; email: string };

export type Experience = {
  id: string;
  company: string;
  city: string;
  position: string;
  to: string;
  from: string;
  achievements: string;
};

export type Projects = {
  id: string;
  title: string;
  link: string;
  desc: string;
};

export type Education = {
  degree: string;
  gpa: string;
  university: string;
  to: string;
  from: string;
};
