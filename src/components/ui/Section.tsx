import { ReactNode } from "react";

type Props = {
  heading: string;
  children: ReactNode;
};

const Section = ({ heading, children }: Props) => {
  return (
    <div className="mb-3 w-[32rem] flex flex-col items-center">
      <p className="text-[22px] font-thin w-full">{heading}</p>
      <div className="w-[30rem] flex flex-col">{children}</div>
    </div>
  );
};

export default Section;
