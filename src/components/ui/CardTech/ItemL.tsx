interface Props {
  logo: string;
  text: string;
}

export const ItemL = ({ logo, text }: Props) => {
  return (
    <div className="d-flex it group h-16 w-full items-center justify-evenly hover:rounded-sm ">
      <img className="w-16 " src={logo} />
      <p className=" hidden group-hover:inline-flex group-hover:[text-shadow:#f3efff_1px_0_20px] ">
        {text}
      </p>
    </div>
  );
};

export const ItemR = ({ logo, text }: Props) => {
  return (
    <div className="d-flex it group h-16 w-full items-center justify-evenly hover:rounded-sm ">
      <p className=" hidden group-hover:inline-flex group-hover:[text-shadow:#f3efff_1px_0_20px] ">
        {text}
      </p>
      <img className="w-16 " src={logo} />
    </div>
  );
};
