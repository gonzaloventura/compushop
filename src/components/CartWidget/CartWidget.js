import {useState , useContext} from 'react'
import './CartWidget.scss'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';

function CartWidget() {
  const [anchorEl, setAnchorEl] = useState(null);

  const { cartProducts, clear } = useContext(CartContext)

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(cartProducts);

  return (
    <div className='cart__widget'>
        <Button variant="dark"><FontAwesomeIcon icon={faCartShopping} /></Button>
    </div>
    
  )
}

export default CartWidget