import React, { useContext } from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import { CartContext } from '../context/CartContext';
import CartProduct from '../components/CartProduct/CartProduct'
import DiscountCode from '../components/DiscountCode/DiscountCode'
import CartTotal from '../components/CartTotal/CartTotal';

const Cart = () => {
  const { cartProducts } = useContext(CartContext)
  console.log("cart", cartProducts)
  return (
    <Container className='app_container'>
        <h1>Carrito</h1>
        <Row>
          <Col xl={8}>
            {(
              cartProducts.length ?
              <CartProduct data={cartProducts} />
              :
              <span>No hay productos en el carrito</span>
            )}
          </Col>
          <Col xl={4}>
            <Card className='cart__card__right shadow-sm'>
              <div className='card__discountcode'>
                <h6>Ingresar cupón de descuento</h6>
                <DiscountCode />
                <CartTotal />
              </div>
              
            </Card>
          </Col>
        </Row>
        
    </Container>
  )
}

export default Cart