import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Col, Row, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './CartProduct.scss'

const CartProduct = ({data}) => {

  return (
    <>
    {data.map(product => (
        <Card className='cardproduct'>
        <Card.Body>
          <Row className='card__cart__product'>
            <Col>
              <img width={'80%'} src={product.image}/>
            </Col>
            <Col>
              <h5>{product.brand} {product.title}</h5>
              <span>Categoría: <Link to={`/${product.category_slug}`}>{product.category}</Link></span>
            </Col>
            <Col>
              <div className='itemcount'>
                <Button variant='secondary'>-</Button>
                <h6 className='m-2 itemcount__counter'>1</h6>
                <Button variant='secondary'>+</Button>
              </div>
            </Col>
            <Col>
              {product.old_price ? <del>${product.old_price}</del> : ""}
              <span>$ {product.price}</span>
            </Col>
            <Col>
              <Button variant='secondary'>
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