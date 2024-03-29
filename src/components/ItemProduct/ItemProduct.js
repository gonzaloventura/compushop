import React, { useEffect, useState, useContext } from 'react'
import './ItemProduct.scss'
import { Card, Button, Row, Col } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTruck } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


function ItemProduct({ data }) {//traigo los props que le paso al componente
  const { id, title, brand, price, old_price, image, free_shipping, category_slug } = data;
  const [quantitySelected, setQuantitySelected] = useState(1)

  useEffect( () => {
}, [quantitySelected])

const addToCart = (e) => {
  e.stopPropagation()
}


  return (
    <div className="col-12 col-lg-3 listProducts">
      <Card className='mt-4 p-3 card__comp'>
        <Link to={`/${category_slug}/${id}`}>
            {free_shipping ? <><span className='card__comp__enviogratis'><FontAwesomeIcon icon={faTruck}/> Envío gratis</span></> : null}
            <div className='card__comp__img'>
            <img src={`${image}`} alt={title}/>
            </div>
            <Card.Title 
            className='pt-4'>
                {brand} {title}
            </Card.Title>
            <h4 className='pt-2 pb-2'><strong>${price}</strong> <span style={{fontSize:'16px'}}><del>{old_price ? "$" + old_price : ''}</del></span></h4>
        </Link>
            <div className='card__buyit'>
            <ItemCount productData={data} setQuantitySelected={setQuantitySelected} action={addToCart}/>
            </div>
            <Row className='mt-2'>
                <Col>
                  <Button className='card__comp__buyNow' variant="primary">Comprar Ahora</Button>
                </Col>
            </Row>
      </Card>
      <ToastContainer />
    </div>
  )
}

export default ItemProduct