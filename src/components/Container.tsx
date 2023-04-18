import { useState } from "react";
import Form from "./cv-form/Form";
import initCV from "../util/initCV";
import Preview from "./cv-preview/Preview";

const Container = () => {
  const [cv, setCv] = useState(initCV);

  return (
    <div className="flex">
      <Form />
      <Preview />
    </div>
  );
};

export default Container;
