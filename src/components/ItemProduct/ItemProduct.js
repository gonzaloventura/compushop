import React, { useEffect, useState } from 'react'
import './ItemProduct.scss'
import { Card, Button, Row, Col } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTruck } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ItemProduct({ data }) {//traigo los props que le paso al componente
  const [addToCart, setAddToCart] = useState();

  const handleAddToCart = () => {
    let text = "Agregado al carrito";
    toast.success(text, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      });
  }

  const { id, title, description, price, old_price, image, stock, free_shipping } = data;
  return (
    <>
    <ToastContainer />
    
    <Card className='mt-4 p-3 card__comp'>
        {free_shipping ? <><span className='card__comp__enviogratis'><FontAwesomeIcon icon={faTruck}/> Envío gratis</span></> : null}
        <img src={`${image}`} alt={title}/>
        <Card.Title 
        className='pt-4'>
            {title}
        </Card.Title>
        <h4 className='pt-2 pb-2'><strong>{price}</strong> <span style={{fontSize:'16px'}}><del>{old_price}</del></span></h4>
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
    </>
  )
}

export default ItemProduct