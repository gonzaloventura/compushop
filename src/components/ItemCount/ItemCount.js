import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

function ItemCount({maxValue}) {
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
    

  return (
    <div className='ItemCount'>
            <Button variant='secondary' onClick={removeNumber}>-</Button>
            <h6 className='m-2'>{contador}</h6>
            <Button variant='secondary' onClick={addNumber}>+</Button>
        </div>
  )
}

export default ItemCount