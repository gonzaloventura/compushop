import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import './ItemCount.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemCount({itemTitle, maxValue, setQuantitySelected}) {
    const [contador, setContador] = useState(1);


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
      let text = "Agregaste " + contador + " " + itemTitle + " al carrito";
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
    }

  return (
    <>
        <div className='itemcount'>
            <Button variant='secondary' onClick={removeNumber}>-</Button>
            <h6 className='m-2 itemcount__counter'>{contador}</h6>
            <Button variant='secondary' onClick={addNumber}>+</Button>
            <Button className='cart__button' variant="dark" onClick={onAdd}><FontAwesomeIcon icon={faCartShopping} /></Button>
        </div>
        
        <ToastContainer />
        </>
  )
}

export default ItemCount