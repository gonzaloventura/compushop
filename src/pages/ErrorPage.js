import React from 'react'
import Container from 'react-bootstrap/Container'    

function ErrorPage() {
  return (
    <Container >
        <div className='errorpage__center'>
            <h1>Error 404</h1>
            <h4>La página que buscaste no existe</h4 >
        </div>
    </Container>
  )
}

export default ErrorPage