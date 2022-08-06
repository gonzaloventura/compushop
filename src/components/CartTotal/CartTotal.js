import React, { useContext } from 'react'
import './CartTotal.scss'
import { Row, Col } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'

const CartTotal = () => {
const { cartProducts } = useContext(CartContext)

const sumCartTotal = cartProducts.reduce((acc, obj) => Number(acc) + Number(obj.price), 0);

  return (
    <div className='cart__total'>
      <dl className="dlist-align"> 
        <dt>Subtotal:</dt> 
        <dd className="right"> ${sumCartTotal}</dd>
      </dl>
      <dl className="dlist-align cart__total__discount"> 
        <dt>Descuento:</dt> 
        <dd className="right"> 0%</dd>
      </dl>
      <dl className="dlist-align cart__total__fee"> 
        <dt>Impuestos:</dt> 
        <dd className="right"> 0%</dd>
      </dl>
      <hr></hr>
      <dl className="dlist-align"> 
        <dt>Total a pagar:</dt> 
        <dd className="right"> ${sumCartTotal}</dd>
      </dl>
    </div>
  )
}

export default CartTotal