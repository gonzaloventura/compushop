import React from 'react'
import Container from 'react-bootstrap/Container';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
// import Modal from './components/Modal/Modal';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container className='app_container'>
    <HomeBanner title="¡Oferta Exclusiva!" description="Mirá todo lo que tenemos para vos" textBoton="Ver productos" botonVariant="primary" colorBanner="primary" />
    <ItemListContainer section='Productos destacados'/>
    <Row style={{marginTop: "80px"}}>
      <Col className='col-12 col-lg-6'>
          <HomeBanner title="Intel Core" description="Mirá todo lo que tenemos para vos" textBoton="Ver productos" botonVariant="light" colorBanner="light" />
      </Col>
      <Col className='col-12 col-lg-6'>
          <HomeBanner title="AMD Ryzen" description="Mirá todo lo que tenemos para vos" textBoton="Ver productos" botonVariant="light" colorBanner="blackred"/>
        </Col>
    </Row>
  </Container>
  )
}

export default Home