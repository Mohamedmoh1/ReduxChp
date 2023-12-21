import { useDispatch } from "react-redux"
import { changeMohamed } from "../Redux/Actions"

const FilterTask=()=>{
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={()=>dispatch(changeMohamed("ALL"))}>All</button>
            <button  onClick={()=>dispatch(changeMohamed("DONE"))}>Done</button>
            <button  onClick={()=>dispatch(changeMohamed("NOTDONE"))}>Not Done</button>

        </div>
    )
}

export default FilterTask