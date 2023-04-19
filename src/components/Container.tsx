import { useState } from "react";
import Form from "./cv-form/Form";
import initCV from "../util/initCV";
import Preview from "./cv-preview/Preview";
import { ArrProperty, CVData, Property } from "../util/type";

const Container = () => {
  const [cv, setCv] = useState<CVData>(initCV);

  console.log(cv["projects"]);

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
    id: string,
    property: ArrProperty
  ) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const items: any = prevState[property].map((item) => {
        if (item.id === id) {
          return { ...item, [name]: value };
        }
        return items;
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
    <div className="flex">
      <Form
        cv={cv}
        onPropertyChange={handlePropertyChange}
        onArrayPropertyChange={handleArrayPropertyChange}
        onTechStackChange={handleTechStackChange}
      />
      <Preview />
    </div>
  );
};

export default Container;
