import { createContext, useState }  from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
const [cartProducts, setCartProducts] = useState([]);

const addProductToCart = (product) => {
  
  setCartProducts([...cartProducts, product])
}

const clear = () => {
  setCartProducts([]);
}

const removeProduct = (id) => {
  const cartProductRemoved = cartProducts.filter((product => product.id !== id));
  setCartProducts(cartProductRemoved);
}

const data = {
  cartProducts,
  addProductToCart,
  clear,
  removeProduct
}

  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider

export { CartContext }