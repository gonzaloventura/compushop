import React from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'

const DiscountCode = () => {
  return (
    <InputGroup>
        <Form.Control
          placeholder="Código del cupón"
          aria-label="Código del cupón"
          aria-describedby="DiscountCode"
        />
        <Button variant="primary" id="DiscountCode">
          Aplicar
        </Button>
    </InputGroup>
  )
}

export default DiscountCode