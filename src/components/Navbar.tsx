const NavBar = () => {
  const navlinks = [
    // ["Inicio", "#home"],
    ["Proyectos", "#projects"],
    // ["Tecnologias", "#techs"],
    ["Sobre mi", "#about"],
    ["Contacto", "#contact"],
  ];
  return (
    <div className="container flex justify-between rounded-md bg-jaguar-950/50 pb-3 pt-4 align-middle text-lg shadow-md shadow-jaguar-400/40 backdrop-blur-sm">
      <div className="font-grotesk text-2xl font-semibold">
        <a href="#">
          Lucas <span className="text-jaguar-500 ">Droguett</span>
        </a>
      </div>
      <div className="flex ">
        <nav>
          {navlinks.map(([title, url]) => (
            <a
              href={url}
              className="px-3 py-2 hover:text-jaguar-500 focus:text-jaguar-400"
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
