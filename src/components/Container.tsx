import { useState } from "react";
import Form from "./cv-form/Form";
import initCV from "../util/initCV";
import Preview from "./cv-preview/Preview";
import { ArrProperty, CVData, Property } from "../util/type";

const Container = () => {
  const [cv, setCv] = useState<CVData>(initCV);

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
    console.log(id, property);
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
    <div className="flex flex-col lg:flex-row items-center">
      <Form
        cv={cv}
        onPropertyChange={handlePropertyChange}
        onArrayPropertyChange={handleArrayPropertyChange}
        onTechStackChange={handleTechStackChange}
      />
      <Preview cv={cv} />
    </div>
  );
};

export default Container;
