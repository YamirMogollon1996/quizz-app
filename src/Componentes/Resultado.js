import React from 'react'
import point from "./assets/point.svg"


const Resultado = ({puntos , setrepeustas ,respuestas}) => {

  const HandleClic = ()=>{
        window.location.href = "/"

  }

  const HanldePowerRetor = ()=>{

    setrepeustas(!respuestas)

  }
  return (
    <div className='container  border d-flex   flex-column  text-center text-center bg-light my-5'>

            <h1>Counter app 1 </h1>
            <h1   >Total :    {   puntos}  Pts</h1>
            <img  className='w-25 h-25 mx-auto  mb-4' src={point} ></img>
            
            <button  onClick={ HandleClic} className='btn btn-outline-primary w-50  mx-auto ' >Volver a Repsonder</button>

            {!respuestas ? 
            <button  onClick={ HanldePowerRetor} className='btn btn-outline-primary w-50 mx-auto' >Ver Respuestas</button>:
            <button  onClick={ HanldePowerRetor} className='btn btn-outline-primary w-50 mx-auto' >Ocultar Respuestas</button>}



    </div>
  )
}

export default Resultado