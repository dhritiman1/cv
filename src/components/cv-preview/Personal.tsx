import { Personal as P } from "../../util/type";
import CVSection from "../ui/CVSection";

type Props = {
  data: P;
};

const Personal = ({ data }: Props) => {
  return (
    <CVSection heading="">
      <div className="w-full font-light leading-none mt-2 text-xl">
        {data.name}
      </div>
      <div className="w-full font-extralight text-sm">{data.email}</div>
    </CVSection>
  );
};

export default Personal;
