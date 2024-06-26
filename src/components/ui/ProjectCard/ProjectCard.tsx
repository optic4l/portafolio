import Carousel from "./Carousel";
import TechList from "./TechList";

import { ReactElement } from "react";
import img1 from "../../../../public/assets/project1/carousel/img1.png";
import img2 from "../../../../public/assets/project1/carousel/img2.png";
import img3 from "../../../../public/assets/project1/carousel/img3.png";
import img4 from "../../../../public/assets/project1/carousel/img4.png";
import img5 from "../../../../public/assets/project1/carousel/img5.png";
import img6 from "../../../../public/assets/project1/carousel/img6.png";

interface Tech {
  nombre: string;
  imagen: string;
}

const ProjectCard = ({
  nombre,
  techs,
  children,
  variant,
}: {
  nombre: string;
  techs: Tech[];
  children: ReactElement | string;
  variant: string;
}) => {
  let classContainer =
    "mb-20 bg-gradient-to-tr  from-jaguar-900/10 to-jaguar-950 flex h-[60vh] gap-3 items-center justify-around p-4 pb-5 shadow-md shadow-jaguar-900/40";

  let classElement = "w-50 flex flex-col justify-center gap-2 pe-3 ";

  if (variant === "end") {
    classContainer =
      "mb-20 bg-gradient-to-tl items-center from-jaguar-900/10 to-jaguar-950 flex gap-3 flex-row-reverse h-[60vh] justify-around p-4 shadow-md shadow-jaguar-900/40";
    classElement = "w-50 flex flex-col justify-center gap-2 ps-3 ";
  }
  const slides = [img1, img2, img3, img4, img5, img6];
  return (
    <div className={classContainer}>
      <div className={classElement}>
        <h1 className=" text-xl">{nombre}</h1>
        <div className="flex w-full flex-wrap py-3">
          <TechList techs={techs} />
        </div>
        <p className=" flex-grow text-base">{children}</p>
      </div>
      <div className="w-50 max-w-lg ">
        <Carousel>
          {slides.map((slide) => (
            <img src={slide} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectCard;
