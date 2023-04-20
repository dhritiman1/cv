import { ReactNode } from "react";

type Props = {
  heading: string;
  children: ReactNode;
};

const CVSection = ({ heading, children }: Props) => {
  return (
    <div className="mb-3 w-mob-section md:w-[37rem] flex flex-col items-center">
      {heading !== "" && (
        <p className="text-[19px] font-light w-full border-b mb-2">{heading}</p>
      )}
      {children}
    </div>
  );
};

export default CVSection;
