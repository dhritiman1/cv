import { v4 as uuidv4 } from "uuid";

const initCV = {
  personal: {
    name: "",
    email: "",
  },
  experience: [
    {
      id: uuidv4(),
      company: "",
      city: "",
      position: "",
      to: "",
      from: "",
      achievements: [],
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
    id: uuidv4(),
    degree: "",
    gpa: "",
    university: "",
    to: "",
    from: "",
  },

  techStack: [],
};

export default initCV;
