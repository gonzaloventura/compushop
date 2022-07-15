import React from 'react'
import './ItemContainer.scss'
import ItemProduct from '../ItemProduct/ItemProduct'

function ItemContainer({section}) {
  return (
    <section className='productos__destacados'>
        <h2>{section}</h2>
        <div className='listProducts'> 
            <ItemProduct
                title="Camiseta"
                price="$14000"
                image="camiseta.webp" 
                />
                <ItemProduct
                title="Campera"
                price="$24000"
                image="campera.webp" 
                />
        </div>
    </section>
  )
}

export default ItemContainer