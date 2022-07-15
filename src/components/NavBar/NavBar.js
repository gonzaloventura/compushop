import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" className='shadow-sm navbar__section'>
      <Container>
        <Navbar.Brand href="#home">CompuShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <ul>
                  <li><Button variant='dark'>Productos</Button></li>
                  <li><Button variant='dark'>Armá tu PC</Button></li>
                  <li><Button variant='dark'>Ayuda</Button></li>
                </ul>
                
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

              </Nav>
              <div className='cart__widget'>
                <Button variant="dark"><FontAwesomeIcon icon={faCartShopping} /></Button>
              </div>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;