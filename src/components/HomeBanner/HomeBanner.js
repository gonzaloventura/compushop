import React from 'react'
import './HomeBanner.scss'
import { Button, Container } from 'react-bootstrap';

const HomeBanner = ({title, description, textBoton, botonVariant}) => {
    return (
        <Container className='homebanner'>
        <div className='homebanner__content text-light'>
            <h1 className='homebanner__title'>
                <strong>{title}</strong>
            </h1>
            <p className='homebanner__description'>
                {description}
            </p>
            <Button variant={botonVariant}>
                {textBoton}
            </Button>
        </div>
        </Container>
    )
}
export default HomeBanner
