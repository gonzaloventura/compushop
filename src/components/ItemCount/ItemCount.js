import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button'
import './ItemCount.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

function ItemCount({productData, setQuantitySelected, action}) {
    const [contador, setContador] = useState(1);
    const [productInCart, setProductInCart] = useState(false);
    const { addProductToCart } = useContext(CartContext)

    const maxValue = productData.stock;

    const addNumber = () =>{
      if(contador < maxValue) {
        setContador(contador + 1)
      } else {
        setContador(contador)
      };
    }
  
    const removeNumber = () =>{
      contador === 1 ? setContador(1) : setContador(contador - 1);
    }

    useEffect( () => {
        // console.log("Actualizacion");
    }, [contador])

      //1. Mount -> Crea
    //   useEffect( () => {
    //     console.log("Ejecuto fase de montaje (1vez)");
    //   },[])

      //2. (pasando [] en segundo parámetro) Update/Change/Actualizacion -> Cambio el valor del State/Prop 
    //   useEffect( () => {
    //     console.log("Ejecuto fase de actualizacion vez");
    //   })

      //3. return()=> {aca adentro lo se desmonta}
    //   useEffect( () => {
    //     return()=>{console.log("desmontaje")}
    //   })

    const handleAddToCart = (contador) => {
      let text = "Agregaste " + contador + " " + productData.title + " al carrito";
      toast.success(text, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        closeButton: false,
        pauseOnFocusLoss: false
        });
    }
    

    const onAdd = () => {
      setQuantitySelected(contador);
      handleAddToCart(contador);
      addProductToCart(productData);
      setProductInCart(true)
    }


  return (
    <>
    { productInCart ? 
      <Button variant='secondary' className='cart__endbuy'><Link to="/cart">Finalizar compra</Link></Button>
    :
    <>
    <div className='itemcount'>
            <Button variant='secondary' onClick={removeNumber}>-</Button>
            <h6 className='m-2 itemcount__counter'>{contador}</h6>
            <Button variant='secondary' onClick={addNumber}>+</Button>
            <Button className='cart__button' variant="dark" onClick={onAdd}><FontAwesomeIcon icon={faCartShopping} /></Button>
        </div>
    </>
  }
        </>
  )
}

export default ItemCount