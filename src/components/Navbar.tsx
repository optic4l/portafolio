import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
				<Navbar.Brand >Lucas Droguett</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>Stack</Nav.Link>
						<Nav.Link>Proyectos</Nav.Link>
						<Nav.Link>Experiencia</Nav.Link>
						<Nav.Link>Contacto</Nav.Link>
						<Nav.Link>CV</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
    </Navbar>
  );
};

export default NavBar;
