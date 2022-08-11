import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import products from '../../utils/products.mock';

function NavBar() {

  // Filtros las categorías existentes
  const listCategories = products.map((element) => ({category : element.category, category_slug : element.category_slug}));

  // Filtro las categorías únicas
  let listCategoriesUnique = [];
  listCategories.forEach(element => {
    if (listCategoriesUnique.find(elementUnique => elementUnique.category_slug === element.category_slug) === undefined) {
      listCategoriesUnique.push({category : element.category, category_slug : element.category_slug});
    } else {
      return;
    }
  } );

  return (
    <Navbar bg="dark" variant='dark' expand="lg" className='shadow-sm navbar__section'>
      <Container>
        <Link to="/" style={{textDecoration:"none"}}><Navbar.Brand><strong>CompuShop</strong></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <ul>
                    <li>
                    <DropdownButton title="Categorías" variant='dark' id="categories" >
                      {listCategoriesUnique.map((category, index) => (
                        <Dropdown.Item key={index} as={Link} to={`/${category.category_slug}`}>{category.category}</Dropdown.Item>
                      ))}
                    </DropdownButton>
                    </li>
                  <Link to="/products"><li><Button variant='dark'>Productos</Button></li></Link>
                  <Link to="/contact"><li><Button variant='dark'>Contacto</Button></li></Link>
                  {/*Para abrir un link externo <a href='https://google.com/' target='_blank'><li><Button variant='dark'>Google</Button></li></a> */}
                </ul>
              </Nav>
              <Link to="/cart"><CartWidget /></Link>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;