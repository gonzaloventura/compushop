import React, { useEffect, useState } from 'react'
import './ItemProduct.scss'
import { Card, Button, Row, Col } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTruck } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


function ItemProduct({ data }) {//traigo los props que le paso al componente
  const { id, title, description, price, old_price, image, stock, free_shipping } = data;
  const [addToCart, setAddToCart] = useState();

  const handleAddToCart = () => {
    let text = "Agregado " + title + " al carrito";
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
    <Card className='mt-4 p-3 card__comp'>
      <Link to={`/product/${id}`}>
          {free_shipping ? <><span className='card__comp__enviogratis'><FontAwesomeIcon icon={faTruck}/> Envío gratis</span></> : null}
          <div className='card__comp__img'>
          <img src={`${image}`} alt={title}/>
          </div>
          <Card.Title 
          className='pt-4'>
              {title}
          </Card.Title>
          <h4 className='pt-2 pb-2'><strong>{price}</strong> <span style={{fontSize:'16px'}}><del>{old_price}</del></span></h4>
      </Link>
          <div className='card__buyit'>
              <div className="col-5">
                <ItemCount maxValue={stock}/>
              </div>
              <div className="col-7">
              <Button className='card__comp__addToCart' variant="dark" onClick={handleAddToCart}><FontAwesomeIcon icon={faCartShopping} /></Button>
              </div>
          </div>
          <Row className='mt-2'>
              <Col>
                <Button className='card__comp__buyNow' variant="primary">Comprar Ahora</Button>
              </Col>
          </Row>
    </Card>
    <ToastContainer />
    </>
  )
}

export default ItemProduct