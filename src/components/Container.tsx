import { useState } from "react";
import Form from "./cv-form/Form";
import initCV from "../util/initCV";
import Preview from "./cv-preview/Preview";
import { v4 as uuidv4 } from "uuid";
import { ArrProperty, CVData, Property } from "../util/type";

const Container = () => {
  const [cv, setCv] = useState<CVData>(initCV);

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experiences: [
        ...prevState.experiences,
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
    }));
  };

  const handleAddProject = () => {
    setCv((prevState) => ({
      ...prevState,
      projects: [
        ...prevState.projects,
        {
          id: uuidv4(),
          title: "",
          link: "",
          desc: "",
        },
      ],
    }));
  };

  const handlePropertyChange = (e: any, property: Property) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      [property]: {
        ...prevState[property],
        [name]: value,
      },
    }));
  };

  const handleArrayPropertyChange = (
    e: any,
    property: ArrProperty,
    id: string
  ) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const items: any = prevState[property].map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return item;
      });
      return { ...prevState, [property]: [...items] };
    });
  };

  const handleTechStackChange = (e: any) => {
    const { value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      techStack: value,
    }));
  };

  return (
    <div className="flex flex-col items-center w-full lg:flex-row ">
      <Form
        cv={cv}
        onPropertyChange={handlePropertyChange}
        onArrayPropertyChange={handleArrayPropertyChange}
        onTechStackChange={handleTechStackChange}
        onAddExperience={handleAddExperience}
        onAddProject={handleAddProject}
      />
      <p className="text-2xl font-extralight w-full px-8 mt-8">Preview:</p>
      <Preview cv={cv} />
    </div>
  );
};

export default Container;
