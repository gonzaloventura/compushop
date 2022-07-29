// import React, { useEffect, useState } from 'react'
// import './ItemDetailContainer.scss'
// import ItemDetail from '../ItemDetail/ItemDetail'
// import products from '../../utils/products.mock'
// import { useParams } from 'react-router-dom'
// import { Container } from 'react-bootstrap'

// function Category() {
//     const [product, setProduct] = useState({});
//   const { id } = useParams();

//   useEffect( () => {
//     getProductById()
//   }
//   , [id])

//   function getProductById() {
//     setProduct(products.find(product => product.id == id));
//   }
//   return (
//     <Container className='app_container'>
//         <h2></h2>
//     </Container>
//   )
// }

// export default Category