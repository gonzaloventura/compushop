import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" className='shadow-sm'>
      <Container>
        <Navbar.Brand href="#home">CompuShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Componentes</NavDropdown.Item>
                  <NavDropdown.Item href="#">Monitores</NavDropdown.Item>
                  <NavDropdown.Item href="#">Consolas</NavDropdown.Item>
                  <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#" className='text-primary'>
                    Ofertas
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Armá tu PC</Nav.Link>
                <Nav.Link href="#link">Ayuda</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;