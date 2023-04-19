import { v4 as uuidv4 } from "uuid";
import { CVData } from "./type";

const initCV: CVData = {
  personal: {
    name: "",
    email: "",
  },
  experiences: [
    {
      id: uuidv4(),
      company: "",
      city: "",
      position: "",
      to: "",
      from: "",
      achievements: "",
    },
  ],
  projects: [
    {
      id: uuidv4(),
      title: "",
      link: "",
      desc: "",
    },
  ],
  education: {
    degree: "",
    gpa: "",
    university: "",
    to: "",
    from: "",
  },

  techStack: "",
};

export default initCV;
