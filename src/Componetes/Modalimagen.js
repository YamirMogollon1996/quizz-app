import React, { useEffect, useState } from 'react'
import img1 from "../Asset/img1.jpg"
import img2 from "../Asset/img2.jpg"
import img3 from "../Asset/img3.jpg"
import img4 from "../Asset/img7.jpg"
import img5 from "../Asset/img5.jpg"
import img6 from "../Asset/img6.jpg"
import img7 from "../Asset/img7.jpg"
import img8 from "../Asset/img8.jpg"
import img9 from "../Asset/img9.jpg"

import "../Componetes/Personal.css"
import Imagenmodalview from './Imagenmodalview'

const inital = [

    {id :1 ,  img:img1},
    {id :2 ,  img:img2},
    {id :3 ,  img:img3},

    {id :4 ,  img:img4},
    {id :5 ,  img:img5},
    {id :6 ,  img:img6},
    {id :5 ,  img:img7},
    {id :5 ,  img:img8},
   

]

const Modalimagen = ({setimagen}) => {

    const [initalimagnes , setinitialimages] =  useState(inital)
    const [item ,  setitem ] =  useState()
    const [blur , setblur] =  useState(false)


const HandleCLick = (item)=>{
    setitem(item)
    console.log(item.id)
    setblur(true)
 
}
    


  return (
        <>
        <div  style={{
            backgroundColor : `${item  && "#444"}`
        }}  className='container_2'>
        {initalimagnes.map(item => <div  className='celtic2'>
                {/* <p>{item.id}</p> */}
                <img  style={{
                        filter: `${blur  ? "blur(5px)" :"blur(0px)"  }`
                }}  onClick={()=>HandleCLick(item)}  className='Celtic' src={item.img} ></img>
        </div>)}
        

        {item &&     
        <Imagenmodalview
            item={item}
            setitem={setitem}
            initalimagnes={initalimagnes}
            setblur={setblur}
         
        
        ></Imagenmodalview>}
        </div>


               
        </>
  )
}

export default Modalimagen