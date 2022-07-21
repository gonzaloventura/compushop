import React from 'react'
import './ItemProduct.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Counter from '../Counter/Counter'

function ItemProduct({ title, price, image }) {//traigo los props que le paso al componente
  return (
    <Card style={{ width: '18rem' }} className='p-2 card__comp'>
        <img src={`assets/${image}`} alt={title}/>
        <Card.Title 
        className='pt-2 '>
            {title}
        </Card.Title>
        <span className='pt-2 pb-2'>{price}</span>
        <Counter/>
        <Button variant="dark">Comprar</Button>
    </Card>
  )
}

export default ItemProduct