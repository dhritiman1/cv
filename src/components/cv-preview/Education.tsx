import { Education as E } from "../../util/type";
import CVSection from "../ui/CVSection";

type Props = {
  education: E;
};

const Education = ({ education }: Props) => {
  return (
    <CVSection heading="Education">
      <div>
        <div>
          <p>{education.from}</p>
          <p>{education.to}</p>
        </div>
        <div>
          <div>
            <p>{education.degree}</p>
            <p>{education.gpa}</p>
          </div>
          <p>{education.university}</p>
        </div>
      </div>
    </CVSection>
  );
};

export default Education;
