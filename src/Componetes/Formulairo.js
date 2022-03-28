import React, { useState } from 'react'

const inital= {
    nombre:"",
    apellido:""
}

const Formulairo = ({   dispacth  ,stado , setmodal}) => {
const [form ,setfrom] =  useState( inital)
const [error,  seterror] =  useState({})

const HandleFocus = ()=>{
    
    const erroes = {}
    if (form.nombre.length === 0){
        erroes.nombre = "nombe malo"
    }
    if (form.apellido.length === 0 ){
        erroes.apellido ="apellido malo"
    }
    seterror(erroes)
}


const HandleChangue = (e)=>{
        form.id =   Date.now()
        setfrom({
            ...form,
            [e.target.name] :  e.target.value
        })

}
const HandleSubmit = (e)=>{
    
    e.preventDefault()
    setfrom(inital)
    setmodal(false)
    const valor = (Object.values(error))
    const find =  stado.find(item => item.nombre === form.nombre && item.apellido=== form.apellido)
    
    
    if (valor.length ===0 && find === undefined){

        dispacth({
            types:"add",
            payload:form

        })
        
    }
    

}

  return (
            <>
        <h1 className='text-center'>Details Nombre</h1>

                    
      <div  className='container pb-5'>

<form  onSubmit={HandleSubmit} >

<input   value={form.nombre} name='nombre' required  onChange={HandleChangue}  onBlur={HandleFocus} className='form-control'  placeholder='nombre' />  
<input value={form.apellido} name='apellido' required onChange={HandleChangue}  onBlur={HandleFocus} className='form-control' placeholder='apellido' /> <button type="submit" className="btn btn-primary  mx-auto mt-3">Submit</button>
</form>

      </div>            
            </>

    
  )
}

export default Formulairo