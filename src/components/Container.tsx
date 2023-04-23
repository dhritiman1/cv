import { useState } from "react";
import Form from "./cv-form/Form";
import initCV from "../util/initCV";
import Preview from "./cv-preview/Preview";
import { v4 as uuidv4 } from "uuid";
import {
  ArrProperty,
  CVData,
  Experience,
  Projects,
  Property,
} from "../util/type";

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

  const handleDelete = (id: string, property: ArrProperty) => {
    setCv((prevState) => {
      const items: Experience[] | Projects[] = (
        prevState[property] as typeof cv.experiences
      ).filter((item: Experience | Projects) => item.id !== id);
      return { ...prevState, [property]: [...items] };
    });
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
    <div className="flex flex-col lg:flex-row md:items-center">
      <div className="lg:w-[50vw] lg:flex lg:items-center lg:flex-col">
        <p className="text-2xl font-extralight w-full lg:w-[44rem] mt-4 pl-4 md:p-0">
          Fill up the form:
        </p>
        <Form
          cv={cv}
          onPropertyChange={handlePropertyChange}
          onArrayPropertyChange={handleArrayPropertyChange}
          onTechStackChange={handleTechStackChange}
          onAddExperience={handleAddExperience}
          onAddProject={handleAddProject}
          onDelete={handleDelete}
        />
      </div>

      <div className="lg:w-[50vw] w-full flex items-center flex-col scale-75 lg:scale-100">
        <p className="text-2xl font-extralight w-[44rem]  mt-4">Preview:</p>
        <Preview cv={cv} />
      </div>
    </div>
  );
};

export default Container;
