import React, { useContext } from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import { CartContext } from '../context/CartContext';
import CartProduct from '../components/CartProduct/CartProduct'
import DiscountCode from '../components/DiscountCode/DiscountCode'

const Cart = () => {
  const { cartProducts } = useContext(CartContext)
  console.log("cart", cartProducts)
  return (
    <Container className='app_container'>
        <h1>Carrito</h1>
        <Row>
          <Col xl={8}><CartProduct data={cartProducts} /></Col>
          <Col xl={4}>
            <Card className='cart__card__right'>
              <div className='card__discountcode'>
                <h6>Ingresar cupón de descuento</h6>
                <DiscountCode />
              </div>
              
            </Card>
          </Col>
        </Row>
        
    </Container>
  )
}

export default Cart