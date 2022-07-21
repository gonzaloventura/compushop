import React from 'react'
import './ItemProduct.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Counter from '../Counter/Counter'

function ItemProduct({ title, price, image }) {//traigo los props que le paso al componente
  return (
    <Card className='p-3 card__comp'>
        <img src={`assets/${image}`} alt={title}/>
        <Card.Title 
        className='pt-2 '>
            {title}
        </Card.Title>
        <span className='pt-2 pb-2'>{price}</span>
        <div className='card__buyit'>
          <div className="col-5">
            <Counter/>
          </div>
          <div className="col-7">
          <Button className='card__comp__buyNow' variant="dark">Comprar</Button>
          </div>
        </div>
        
    </Card>
  )
}

export default ItemProduct