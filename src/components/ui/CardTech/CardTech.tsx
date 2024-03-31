import { ReactElement, ReactPortal } from "react";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}

type ReactNode =
  | ReactChild
  | ReactNodeArray
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children: ReactNode;
  type: string;
};

const CardTech = (props: Props) => {
  const { type } = props;
  let bgImage = "";
  switch (type) {
    case "front":
      bgImage = "bg-[url('/assets/techCards/frontBG.svg')]";
      break;
    case "back":
      bgImage = "bg-[url('/assets/techCards/server.svg')]";
      break;
    case "bdd":
      bgImage = "bg-[url('/assets/techCards/bddBG.svg')]";
      break;
    case "tools":
      bgImage = "bg-[url('/assets/techCards/toolsBG.svg')]";
      break;
    case "others":
      bgImage = "bg-[url('/assets/techCards/otherBG.svg')]";
      break;
  }
  const classname = `h-full w-100 d-flex  flex-col items-center justify-evenly rounded-sm bg-jaguar-900/5 ${bgImage}  bg-cover pb-3 shadow-md shadow-jaguar-900/30 hover:bg-gradient-to-b hover:from-jaguar-950/20 hover:to-jaguar-900/40 hover:shadow-xl hover:shadow-jaguar-900/40`;
  return (
    <div className="d-flex w-100 h-full justify-between gap-3 ">
      <div className={classname}>{props.children}</div>
    </div>
  );
};

export default CardTech;
