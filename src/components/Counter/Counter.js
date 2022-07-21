import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'

function Counter() {
    const [contador, setContador] = useState(1);

    const addNumber = () =>{
      setContador(contador + 1);
    }
  
    const removeNumber = () =>{
      contador === 1 ? setContador(1) : setContador(contador - 1);
    }

    useEffect( () => {
        console.log("Actualizacion");
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
    <div className='counter'>
            <Button onClick={removeNumber}>-</Button>
            <h5 className='m-2'>{contador}</h5>
            <Button onClick={addNumber}>+</Button>
        </div>
  )
}

export default Counter