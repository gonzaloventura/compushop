import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" className='shadow-sm'>
      <Container>
        <Navbar.Brand href="#home">CompuShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Button variant="primary" className='m-2'>Productos</Button>
                {/* <NavDropdown title="Categorías" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Componentes</NavDropdown.Item>
                  <NavDropdown.Item href="#">Monitores</NavDropdown.Item>
                  <NavDropdown.Item href="#">Consolas</NavDropdown.Item>
                  <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#" className='text-primary'>
                    Ofertas
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Button variant="secondary" className='m-2'>Armá tu PC</Button>
                <Button variant="secondary" className='m-2'>Ayuda</Button>
              </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;