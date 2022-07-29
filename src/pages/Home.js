import React from 'react'
import Container from 'react-bootstrap/Container';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
// import Modal from './components/Modal/Modal';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className='app_container'>
    <HomeBanner title="¡Oferta Exclusiva!" description="Mirá todo lo que tenemos para vos" textBoton="Ver productos" botonVariant="primary" colorBanner="primary" />
    <ItemListContainer section='Productos destacados'/>
    <Row style={{marginTop: "80px"}}>
      <Col className='col-12 col-lg-6'>
        <Link to="/procesadores/intel">
          <HomeBanner title="Intel Core" description="Mirá todo lo que tenemos para vos" textBoton="Ver productos" botonVariant="light" colorBanner="light" />
        </Link>
      </Col>
      <Col className='col-12 col-lg-6'>
        <Link to="/procesadores/amd">
          <HomeBanner title="AMD Ryzen" description="Mirá todo lo que tenemos para vos" textBoton="Ver productos" botonVariant="light" colorBanner="blackred"/>
        </Link>
        </Col>
    </Row>
  </Container>
  )
}

export default Home