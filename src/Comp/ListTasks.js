import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react"

const ListTasks=()=>{
    const tasks = useSelector(state=>state.tasks)
    const mohamed = useSelector(state=>state.mohamed)
    return(
        <div>
            
           {
            mohamed == "ALL" ? 
            tasks.map((el,i,t)=> <CardTask el={el}/>)
            :
            mohamed == "DONE" ?
            tasks.filter((el,i,t)=> el.isDone == true).map((el,i,t)=> <CardTask el={el}/>)
            :
            tasks.filter((el,i,t)=> el.isDone == false).map((el,i,t)=> <CardTask el={el}/>)
           
           }
            
        </div>
    )
}

export default ListTasks