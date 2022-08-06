import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {Card, Col, Row, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './CartProduct.scss'
import { CartContext } from '../../context/CartContext';

const CartProduct = ({data}) => {
  const { removeProduct } = useContext(CartContext)

  return (
    <>
    {data.map(product => (
        <Card className='cardproduct shadow-sm' key={product.id}>
        <Card.Body>
          <Row className='card__cart__product'>
            <Col lg={2}>
              <img alt='Imagen' width={'80%'} src={product.image}/>
            </Col>
            <Col>
              <h5>{product.brand} {product.title}</h5>
              <span className='cart__category'>Categoría: <Link to={`/${product.category_slug}`}>{product.category}</Link></span>
            </Col>
            <Col lg={2} className="cart__counter">
              <div className='itemcount'>
                <Button variant='secondary'>-</Button>
                <h6 className='m-2 itemcount__counter'>1</h6>
                <Button variant='secondary'>+</Button>
              </div>
            </Col>
            <Col lg={2} className="cart__price">
              {product.old_price ? <del>${product.old_price}</del> : ""}
              <span className='cart__product__price'>${product.price}</span>
            </Col>
            <Col lg={1}>
              <Button variant='secondary' onClick={()=>{console.log("eliminar"); removeProduct(product.id);}}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    ))}
  </>
  )
}

export default CartProduct