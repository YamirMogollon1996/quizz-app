import { useState } from "react";
import Contador from "./Componetes/Contador";
import CrudReducer from "./Componetes/CrudReducer";
import EditarModal from "./Componetes/EditarModal";
import Imagenmodalview from "./Componetes/Imagenmodalview";
import Modalimagen from "./Componetes/Modalimagen";



function App() {


  const [estado ,setimagen ] =  useState()

  return(
    <>
      {/* <CrudReducer></CrudReducer> */}
      <Modalimagen  setimagen={setimagen}>


      </Modalimagen>
    

    </> 
    
    
  )
 
} 
export default App;
