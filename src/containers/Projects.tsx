import djangoLogo from "../assets/backstack/django.svg";
import pythonLogo from "../assets/backstack/python-4.svg";
import jsLogo from "../assets/frontstack/logo-javascript.svg";
import reactLogo from "../assets/frontstack/react.svg";
import ProjectCard from "../components/ui/ProjectCard/ProjectCard";

const Projects = () => {
  const project1 = [
    {
      nombre: "react",
      imagen: reactLogo,
    },
    {
      nombre: "Javascript",
      imagen: jsLogo,
    },
    {
      nombre: "Django",
      imagen: djangoLogo,
    },
    {
      nombre: "Python",
      imagen: pythonLogo,
    },
  ];

  return (
    <div id="projects" className="container flex h-auto flex-col gap-5 pt-20">
      <h1 className="text-3xl">Proyectos</h1>
      <ProjectCard nombre="Proyecto numero 1" techs={project1} variant="start">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ipsum
        ullam, quas odio sit aliquid amet delectus eius quidem vel
        exercitationem est. Ratione tenetur architecto rerum, consequuntur ipsa
        corporis nihil?
      </ProjectCard>
      <ProjectCard nombre="Proyecto numero 2" techs={project1} variant="end">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, vitae
        delectus. Esse, saepe veniam vitae vel neque blanditiis nam? Maiores
        consequuntur incidunt nesciunt quos praesentium ut minima. Explicabo,
        nesciunt expedita.
      </ProjectCard>
      <ProjectCard nombre="Proyecto numero 3" techs={project1} variant="start">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
        officiis. Praesentium nesciunt voluptas libero ratione, pariatur
        incidunt sunt porro maxime numquam fugit sint est! Temporibus
        necessitatibus porro delectus maiores obcaecati?
      </ProjectCard>
    </div>
  );
};

export default Projects;
