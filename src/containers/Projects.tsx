import djangoLogo from "../assets/backstack/django.svg";
import pythonLogo from "../assets/backstack/python-4.svg";
import jsLogo from "../assets/frontstack/logo-javascript.svg";
import reactLogo from "../assets/frontstack/react.svg";

const Projects = () => {
  return (
    <div id="projects" className="container mt-20 h-[500px] ">
      <h1 className="text-3xl">Proyectos</h1>
      <div className="flex h-[400px] justify-around  py-4">
        <div className="w-50 flex flex-col justify-center gap-2 pe-3 ">
          <h1 className=" text-xl">Nombre del proyecto</h1>
          <div className="d-flex w-full gap-5  py-3">
            <div className="flex items-center gap-1">
              <img className="w-6 rounded-lg" src={reactLogo} />
              <p>react</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-6 rounded-lg" src={jsLogo} />
              <p>Javascript</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-6 rounded-lg" src={djangoLogo} />
              <p>django</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-6 rounded-lg" src={pythonLogo} />
              <p>python</p>
            </div>
          </div>
          <p className=" flex-grow ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            perferendis corrupti nemo consectetur odio soluta numquam placeat id
            dolore asperiores! Omnis dicta eligendi autem at animi reiciendis,
            aut neque sequi.
          </p>
        </div>
        <div className="w-50 border">Imagen</div>
      </div>
    </div>
  );
};

export default Projects;
