import React, { useReducer, useState } from 'react'
import Formulairo from './Formulairo.js'
import { inital, Reducer, types   } from './types'
import { BrowserRouter  , Routes ,Route} from "react-router-dom"
import EditarModal from './EditarModal.js'

const CrudReducer = () => {

    const [ stado ,  dispacth] =  useReducer( Reducer, inital)
    const [modal, setmodal] =  useState(false)
    const [ editarmodal, seteditarmodal] =  useState(false)
    
  return (

<>

    <button  onClick={()=>setmodal(!modal)} className='btn btn-primary' >ADD</button>

    {modal && <Formulairo  
    
        dispacth={dispacth} 
        stado ={stado}
        setmodal={setmodal}

    ></Formulairo>}
    { editarmodal && <EditarModal

    stado={stado}
    dispacth={dispacth} >
    
    </EditarModal>}

      <div  className='container' >

            
<table className='table responsive' >
                    <thead>

                    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Actions</th>
    </tr>
    </thead>
        <tbody>
                {stado.legth === 0 ?  <h1>sin data</h1>  :
                 stado.map(item => <tr key={item.id} >
                            <td>{item.id}</td>
                            <td> {item.nombre} </td>
                            <td> {item.apellido} </td>
                            <td>
                                <button onClick={()=>dispacth({
                                        types:"eliminar",
                                        paylodad:item

                                })}  className='btn  m-1 btn-danger'>borrar</button>
                                <button

                                    className='btn btn-primary'
                                    onClick={()=>dispacth({
                                        types:"editar",
                                        payload: item
                                    })}

                                >editar</button>
                            </td>
                </tr>)}
    
        </tbody>
            </table>
      </div>      
      </>
  ) 
}


export default CrudReducer