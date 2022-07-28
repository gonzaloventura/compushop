import React, {useState} from 'react'
import './ItemDetail.scss'
import { Card, Row, Col, Button } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart, faTruck} from '@fortawesome/free-solid-svg-icons'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ItemDetail() {

    const handleAddToCart = () => {
        let text = "Agregado " + "title" + " al carrito";
        toast.success(text, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          closeButton: false,
          pauseOnFocusLoss: false
          });
      }

    
  return (
    <>
    <Card className='itemdetail__card'>
        <Row>
            <Col className='col-12 col-lg-8 center'>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
            </Col>
            <Col className='col-12 col-lg-4 center'>
                <Card.Body>
                    <h2>Titulo de producto</h2>
                    <p>Lorem ipsum dolor sit amet tristique duis fusce molestie. Suspendisse sem parturient vestibulum sagittis maecenas auctor inceptos enim semper. Sociosqu convallis sit vulputate ornare torquent.</p>
                    <span className='old_price'>$399.99</span>
                    <br/>
                    <div className='prices'>
                        <span className='price'>$299,99</span>
                        <span className='discount'>-15% OFF</span>
                    </div>
                    <br/>
                    <div>
                        <span><FontAwesomeIcon icon={faTruck}/> Envio gratis</span>
                    </div>
                    <br/>
                    <div>
                        <span>Cantidad:</span>
                    <ItemCount maxValue={5}/>
                    </div>
                    <br/>
                    <div className='buttons'>
                        <Button>
                            Comprar ahora
                        </Button>
                        <Button onClick={handleAddToCart} variant="dark">
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