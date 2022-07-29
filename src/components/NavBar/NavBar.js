import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" className='shadow-sm navbar__section'>
      <Container>
        <Link to="/" style={{textDecoration:"none"}}><Navbar.Brand><strong>CompuShop</strong></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <ul>
                  <Link to="/product"><li><Button variant='dark'>Productos</Button></li></Link>
                  <Link to="/"><li><Button variant='dark'>Armá tu PC</Button></li></Link>
                  <Link to="/contact"><li><Button variant='dark'>Contacto</Button></li></Link>
                  {/*Para abrir un link externo <a href='https://google.com/' target='_blank'><li><Button variant='dark'>Google</Button></li></a> */}
                </ul>
              </Nav>
              <CartWidget />
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;