import { ReactNode } from "react";

type Props = {
  heading: string;
  children: ReactNode;
};

const CVSection = ({ heading, children }: Props) => {
  return (
    <div className="mb-3">
      {heading !== "" && <p className="text-2xl font-thin">{heading}</p>}
      {children}
    </div>
  );
};

export default CVSection;
