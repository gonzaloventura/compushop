import React, {useState} from 'react'
import './ItemDetail.scss'
import { Card, Row, Col, Button } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faTruck} from '@fortawesome/free-solid-svg-icons'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ItemDetail({data}) {
    const { id, title, description, price, old_price, image, stock, free_shipping } = data;
  return (
    <>
    <Card className='itemdetail__card'>
        <Row>
            <Col className='col-12 col-lg-8 center'>
                <Card.Img variant="top" src={image} />
            </Col>
            <Col className='col-12 col-lg-4 center'>
                <Card.Body>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span className='old_price'>{old_price}</span>
                    <br/>
                    <div className='prices'>
                        <span className='price'>{price}</span>
                        <span className='discount'>-15% OFF</span>
                    </div>
                    <br/>
                    <div>
                        <span><FontAwesomeIcon icon={faTruck}/> Envio gratis</span>
                    </div>
                    <br/>
                    <div>
                        <span>Cantidad:</span>
                    <ItemCount maxValue={stock}/>
                    </div>
                    <br/>
                    <div className='buttons'>
                        <Button>
                            Comprar ahora
                        </Button>
                        <Button variant="dark">
                        Agregar <FontAwesomeIcon icon={faShoppingCart} />
                        </Button>
                    </div>
                </Card.Body>
            </Col>
        </Row>
    </Card>
    <ToastContainer />
    </>
  )
}

export default ItemDetail