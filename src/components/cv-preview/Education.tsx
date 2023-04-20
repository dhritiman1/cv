import { Education as E } from "../../util/type";
import CVSection from "../ui/CVSection";

type Props = {
  education: E;
};

const Education = ({ education }: Props) => {
  return (
    <CVSection heading="Education">
      <div className="flex font-light text-sm leading-tight w-full">
        <div className="flex w-[80px] pr-3">
          <p>{education.from}</p>
          <p className="px-[1px]">-</p>
          <p>{education.to}</p>
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <p>{education.degree}</p>
            <div className="flex">
              <p>GPA:</p>
              <p className="px-2 font-extralight italic">{education.gpa}</p>
            </div>
          </div>
          <p className="font-extralight italic">{education.university}</p>
        </div>
      </div>
    </CVSection>
  );
};

export default Education;
