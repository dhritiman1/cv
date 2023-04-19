import { Personal as P } from "../../util/type";
import CVSection from "../ui/CVSection";

type Props = {
  data: P;
};

const Personal = ({ data }: Props) => {
  return (
    <CVSection heading="">
      <div>{data.name}</div>
      <div>{data.email}</div>
    </CVSection>
  );
};

export default Personal;
