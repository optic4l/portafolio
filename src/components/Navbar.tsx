

const NavBar = () => {
  const navlinks = [
    ['Inicio', '#home'],
    ['Proyectos', '#projects'],
    ['Tecnologias', '#techs'],
    ['Sobre mi','#about'],
    ['Contacto', '#contact']
  ]
  return (
    <div className='container flex justify-around align-middle py-4 shadow-sm'>
      <div>
        <strong>Lucas Droguett</strong>
         
      </div>
      <div className='flex justify-between'>
        <nav>
          {
            navlinks.map(([title, url]) => (
              <a href={url} className='px-3 py-2 focus:text-purple hover:text-dark-purple'>{title}</a>
            ))
          }
        </nav>
        <button className='rounded-lg w-20 hover:bg-blue outline outline-1 hover:outline-orange hover:text-orange'>CV</button>
      </div>

    
    </div>
  );
};

export default NavBar;
