const About = () => {
  return (
    <div id="about" className="container h-[500px] pt-20">
      <div className=" bg-gradient-to-r from-jaguar-50 via-jaguar-300 to-jaguar-950 to-65% pb-0.5">
        <div className=" bg-jaguar-950">
          <h1 className="text-3xl">Sobre mi</h1>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-50 flex flex-col gap-4">
          <p>
            Hola! Soy Lucas, graduado de Ingeniería en Informática de la
            Universidad Tecnológica Metropolitana y desarrollador de software
            fullstack con un enfoque preferencial en el backend.
          </p>
          <p>
            Aspiro a ser un arquitecto de software innovador. Me interesan el
            desarrollo móvil, la inteligencia artificial y el Internet de las
            Cosas. Fuera del trabajo, disfruto de la lectura, los deportes y el
            tiempo con los animales. ¡Gracias por visitar mi portafolio!
          </p>
        </div>
        <div className="w-50 flex justify-center ">
          <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full border bg-jaguar-200">
            <p>Imagen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
