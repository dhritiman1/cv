type Props = {
  item: string;
};

const Li = ({ item }: Props) => {
  return <li className="pl-2 opacity-75">{item}</li>;
};

export default Li;
