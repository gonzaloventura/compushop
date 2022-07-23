import './CartWidget.scss'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
  return (
    <div className='cart__widget'>
        <Button variant="dark"><FontAwesomeIcon icon={faCartShopping} /></Button>
    </div>
  )
}

export default CartWidget