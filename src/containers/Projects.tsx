import ProjectCard from "../components/ui/ProjectCard/ProjectCard";
import { project1, project2 } from "../data/projects.ts";
const Projects = () => {
  return (
    <div id="projects" className="container flex  h-auto flex-col gap-5 pt-20">
      <div className=" bg-gradient-to-r from-jaguar-50 via-jaguar-300 to-jaguar-950 to-65% pb-0.5">
        <div className=" bg-jaguar-950">
          <h1 className="text-3xl">Proyectos</h1>
        </div>
      </div>
      <ProjectCard nombre="Proyecto numero 1" techs={project1} variant="start">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ipsum
        ullam, quas odio sit aliquid amet delectus eius quidem vel
        exercitationem est. Ratione tenetur architecto rerum, consequuntur ipsa
        corporis nihil?
      </ProjectCard>
      <ProjectCard nombre="Proyecto numero 2" techs={project2} variant="end">
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
