import { useEffect, useState } from "react";
import { data } from "./Componentes/data";
import Respuestas from "./Componentes/Respuestas";
import Resultado from "./Componentes/Resultado";

function App() {
   
  const [timers , setiemrs]  = useState(5)
  const [pagination , setpagination] =  useState(1)
  const [actual , setacualpage]  =  useState([])
  const [finnal , setfinishi] =  useState( false )
  const [puntos , setpuntos] =  useState(0)
  const [ respuestas ,  setrepeustas] =  useState(false)



useEffect(()=>{
  console.log(data)

},[])

const ObtenrDatapagination = ()=>{
  setacualpage(data.slice(pagination-1,pagination))

}
  useEffect(()=>{

    if (timers > 0){
      const interval =  setInterval(() => {
        setiemrs( (prev) => timers - 1)
    }, 1000);
  
    return () => clearInterval(interval  )
    }

  } )

const  HandleNextL = ()=>{

  if (pagination < data.length ) {

    setpagination(pagination +1 )
    setiemrs(5)
    }
    else{
      setfinishi(true)
    }
  
}
const HanldeNexting = (item,e)=>{
  
  item.iscorrect  && setpuntos(puntos +1)
 
   if (pagination < data.length ) {


    setTimeout(() => {
      setpagination(pagination +1 )    
    }, 200);
 
    setiemrs(5)
   
    }
    else{
      setfinishi(true)
    }

}


useEffect(()=>{
  ObtenrDatapagination()

},[pagination])

    return(
        
<>

      <h1 className="text-center" >Quizz App</h1>
    { !finnal  ?          
    <div className="container border d-flex  bg-gradient  my-5 rounded  ">
          <div className="row p-2" >
              <div  className="col-6 text-center " >     
                       
                      <span>page {pagination}de {data.length}</span>
                      {
                          actual.map(item => <h3   >{item.title}  ?</h3>)
                      }
                      <h1 className="text-warning" >{timers}</h1>
                      <button  onClick={()=>HandleNextL()} className="btn btn-outline-primary " >Continuar</button> 
               
                      </div>
                      

              </div>
              <div  className="col-6 text-center " >
              {/* border  rounded m-3 text-center w-75 bg-light  */}
         
              {
                          actual.map(item => item.opciones.map(item => <button  disabled={timers === 0} onClick={(e)=>HanldeNexting(item,e)}  className={  `${item.iscorrect? "bg-success" : "bg-danger"}  border  rounded m-3 text-center w-75 bg-light `}>  <h3>{item.textoRespuesta}</h3> </button>))  
                      }
              </div>
          
      
    </div> : <Resultado 
    respuestas={respuestas} 
    setrepeustas={setrepeustas}
    puntos={puntos } ></Resultado>  }
         
    {respuestas && <Respuestas  data={data} ></Respuestas>}
  
</>

    )}
export default App;
