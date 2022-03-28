export const inital = [
    {id:1 , nombre:"yamir",apellido:"mogollon"},
    {id:2 , nombre:"victor",apellido:"manusalbal"},
    {id:3 , nombre:"ericka",apellido:"render"},
]

export const types = {
        eliminar :"eliminar",
        add :"add",
        editar:"editar"
}


export  const Reducer = (state ,  actions)=>{
        if (actions.types === types.eliminar){
            return  state.filter(item => item.id !=  actions.paylodad.id)
        }
        if (actions.types === types.add){
            // console.log(actions.payload)
            return [...state, actions.payload]

        }
        if (actions.types === types.editar){
                console.log(actions.payload)
        }



    return state


}