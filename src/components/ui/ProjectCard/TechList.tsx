import React from "react";

interface Tech {
  nombre: string;
  imagen: string;
}

const TechList: React.FC<{ techs: Tech[] }> = ({ techs }) => {
  return (
    <>
      {techs.map((tech: Tech, index: number) => (
        <div key={index} className="flex items-center gap-1 pe-4">
          <img className="w-6 rounded-lg" src={tech.imagen} />
          <p className="text-sm">{tech.nombre}</p>
        </div>
      ))}
    </>
  );
};

export default TechList;
