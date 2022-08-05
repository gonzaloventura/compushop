import React from 'react'
import Container from 'react-bootstrap/Container'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

function Contact() {
  return (
    <Container className='app_container'>
        <ItemListContainer section='Productos'/>
    </Container>
  )
}

export default Contact