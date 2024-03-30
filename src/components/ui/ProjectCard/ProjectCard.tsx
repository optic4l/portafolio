import Carousel from "./Carousel";
import TechList from "./TechList";

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
  children: string;
  variant: string;
}) => {
  let classContainer =
    "my-2 flex h-[60vh] gap-3 justify-around p-4 shadow-md shadow-jaguar-900/40";

  let classElement = "w-50 flex flex-col justify-center gap-2 pe-3 ";

  if (variant === "end") {
    classContainer =
      "my-2 flex gap-3 flex-row-reverse h-[60vh] justify-around p-4 shadow-md shadow-jaguar-900/40";
    classElement = "w-50 flex flex-col justify-center gap-2 ps-3 ";
  }
  const slides = [
    "./src/assets/proyecto1/img1.png",
    "./src/assets/proyecto1/img2.png",
    "./src/assets/proyecto1/img3.png",
    "./src/assets/proyecto1/img4.png",
    "./src/assets/proyecto1/img5.png",
    "./src/assets/proyecto1/img6.png",
  ];
  return (
    <div className={classContainer}>
      <div className={classElement}>
        <h1 className=" text-xl">{nombre}</h1>
        <div className="d-flex w-full gap-5  py-3">
          <TechList techs={techs} />
        </div>
        <p className=" flex-grow ">{children}</p>
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