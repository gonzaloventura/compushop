import React, { useContext } from 'react'
import './CartTotal.scss'
import { Row, Col } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'

const CartTotal = () => {
const { cartProducts } = useContext(CartContext)

const sumCartTotal = cartProducts.reduce((acc, obj) => Number(acc) + Number(obj.price), 0);

  return (
    <Row className='cart__total'>
        <Col>
            Total carrito: ${sumCartTotal}
        </Col>
    </Row>
  )
}

export default CartTotal