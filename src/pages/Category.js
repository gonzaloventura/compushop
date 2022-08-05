import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import products from '../utils/products.mock';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

function Category() {
    const { category } = useParams();
    const categoryName = products.find(product => product.category_slug === category);

  return (
    <Container className='app_container'>
        {category ? <ItemListContainer section={categoryName.category} /> : <h1>Categorías</h1>}
    </Container>
  )
}

export default Category