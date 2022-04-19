import React, { useEffect, useState } from 'react'
import rif from "../Asset/rif.svg"
import izqui from "../Asset/left.svg"
const Imagenmodalview = ({item,setitem,initalimagnes ,setblur}) => {


  const [ver , setver] =  useState(true)
  const [estado, setestado ] =  useState()


  useEffect(()=>{
    const inicial  = initalimagnes[item.id]
    setestado(inicial.id)
    setestado(estado +1)

    imagen_mostrar()

  },[item])


  const   imagen_mostrar =  async ()=>{

    const primero  =  await initalimagnes[item.id]
    return primero

  
  }


  const handleimagen = ()=>{
      // console.log(initalimagnes)

  }

  const Handleserver = ()=>{
    setitem("")
    setblur(false)
    
  }
  const HandleClicer = ()=>{
    
        setestado ( estado +1  )
  }




  const Handleprevios = ()=>{
    setestado(estado -1)


  }


useEffect(()=>{
  
  handleimagen()

},[item ])

  return (

    <div  className='facebook' >
      
            {/* <img src={estado.img}></img> */}
              {item &&  ver   && <img className='imagen_modal' src={item.img} ></img>}
              <button className='click_modal' onClick={Handleserver} >x</button>
              <button    onClick={()=>HandleClicer(item)} className=  'derecha'>
            next
              </button>
              <button   onClick={()=>Handleprevios()} className='izquierda'>previos</button>
    </div>


  )
}

export default Imagenmodalview