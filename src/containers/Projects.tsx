import ProjectCard from "../components/ui/ProjectCard/ProjectCard";
import { project1, project2, project3 } from "../data/projects.ts";
const Projects = () => {
  return (
    <div id="projects" className="container flex  h-auto flex-col gap-5 pt-20">
      <div className=" bg-gradient-to-r from-jaguar-50 via-jaguar-300 to-jaguar-950 to-65% pb-0.5">
        <div className=" bg-jaguar-950">
          <h1 className="text-3xl">Proyectos</h1>
        </div>
      </div>
      <ProjectCard
        nombre="Sistema de Seguimiento y Control de Obras"
        techs={project1}
        variant="start"
      >
        <>
          <p className="pb-3">
            Este sistema ofrece una herramienta para supervisar el progreso de
            trabajos en terreno, proporcionando a los supervisores un listado
            completo de las obras asignadas, con detalles específicos de cada
            una y un resumen general.
          </p>
          <p className="pb-3">
            Además, permite la carga, visualización y descarga de documentos, y
            presenta gráficos de líneas para visualizar la evolución del
            progreso.
          </p>
          <p className="pb-3">
            En cuanto a mi rol, estuve a cargo del desarrollo del backend y
            parte del frontend, así como de la integración de gráficos de Power
            BI en la aplicación web. También configuré los servicios de Azure
            (Blob storage, Servidor MySql, Web app) para garantizar un
            despliegue correcto.
          </p>
        </>
      </ProjectCard>
      <ProjectCard
        nombre="Integracion de Sistema de Red IoT Hibrida"
        techs={project2}
        variant="end"
      >
        <>
          <p className="pb-3">
            Este proyecto forma parte de mi trabajo de título, donde integré una
            red IoT utilizando tecnología LoRa, junto con un sistema de
            monitoreo.
          </p>
          <p className="pb-3">
            Mi tarea principal fue establecer la comunicación entre los
            dispositivos LoRa, la base de datos de series temporales, el sistema
            de monitoreo y la base de datos relacional.
          </p>
          <p className="pb-3">
            Para lograrlo, implementé colas de mensajería y levanté los
            servicios en una instancia EC2 de AWS, creando además una API para
            ser consumida por el sistema de monitoreo.
          </p>
        </>
      </ProjectCard>
      <ProjectCard
        nombre="Sitio Web LightGreen.cl"
        techs={project3}
        variant="start"
      >
        <>
          <p className="pb-3">
            Sitio web para la empresa de luminarias Ligthgreen. Creado con
            Wordpress
          </p>
          <a
            className="text-jaguar-300 hover:text-jaguar-500"
            href="https://lightgreen.cl"
            target="_blank"
          >
            Visitar sitio web
          </a>
        </>
      </ProjectCard>
    </div>
  );
};

export default Projects;
