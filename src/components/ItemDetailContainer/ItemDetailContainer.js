import React, { useEffect, useState } from 'react'
import './ItemDetailContainer.scss'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect( () => {
    getProductById()
  }
  , [id])

  function getProductById() {
    setProduct(products.find(product => product.id == id));
  }

  // const getProductById = (ID) => {
  //   products.some(product => {
  //     if (product.id == id) {
  //       console.log("Producto encontrado:", product);
  //       return product;
  //     } 
  //   }
  //   )
  // }

  return (
    <ItemDetail data={product}/>
  )
}

export default ItemDetailContainer