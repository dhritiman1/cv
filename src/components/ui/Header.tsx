type Props = {
  logo: string;
};

const Header = ({ logo }: Props) => {
  return (
    <div className="h-14 w-full flex items-center border-b">
      <p className="text-2xl font-thin px-7">{logo}</p>
    </div>
  );
};

export default Header;
