import React, { useEffect } from 'react'
import { data } from './data'

const Respuestas = () => {

    const dataS =  data.map(item => item.opciones)
    const Valores = dataS.map(item => item.filter(item => item.iscorrect))

// useEffect(()=>{
            
// },[])

  return (
      <>    
        <div className='container border  text-center   d-flex  flex-column justify-content-around  bg-dark text-white'>

        { Valores.map(  (item, index) => item.map( (item )=> <h4>  {item.textoRespuesta} </h4>  ))}
      

        </div>
               
            
      </>
             
  )
}

export default Respuestas