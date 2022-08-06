import React from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'

const DiscountCode = () => {
  return (
    <InputGroup>
        <Form.Control
          placeholder="Cupón de descuento"
          aria-label="Cupón de descuento"
          aria-describedby="DiscountCode"
        />
        <Button variant="primary" id="DiscountCode">
          Aplicar
        </Button>
    </InputGroup>
  )
}

export default DiscountCode