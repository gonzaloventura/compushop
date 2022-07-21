import React from 'react'
import './ItemContainer.scss'
import ItemProduct from '../ItemProduct/ItemProduct'

function ItemContainer({section}) {
  
  const data = [
    {
      title: "Intel i3 12100",
      price: "$99.99",
      image: "assets/products/i3.webp",
      stock: 4
    },
    {
      title: "Intel i5 12400",
      price: "$299.99",
      image: "assets/products/i5.webp",
      stock: 12
    },
    {
      title: "Intel i7 12700",
      price: "$399.99",
      image: "assets/products/i7.webp",
      stock: 8
    },
    {
      title: "AMD Ryzen 9 5900x",
      price: "$499.99",
      image: "assets/products/ryzen95900x.webp",
      stock: 10
    },
    
  ]
  
  return (
    <section className='productos__destacados'>
        <h2>{section}</h2>
        <div className='row row-cols-4 mt-5 mb-5'> 
          <div className='col-6 col-xl-3'>
            <ItemProduct title="Intel i3 12100" price="$129.99" image="i3.webp" stock={4}/>
          </div>
          <div className='col-6 col-xl-3'>
            <ItemProduct title="Intel i5 12400F" price="$174.99" image="i5.webp" stock={12}/>
          </div>
          <div className='col-6 col-xl-3'>
            <ItemProduct title="Intel i7 12700" price="$344.99" image="i7.webp" stock={8}/>
          </div>
          <div className='col-6 col-xl-3'>
            <ItemProduct title="AMD Ryzen 9 5900x" price="$389.99" image="ryzen95900x.webp" stock={10}/>
          </div>
        </div>
    </section>
  )
}

export default ItemContainer