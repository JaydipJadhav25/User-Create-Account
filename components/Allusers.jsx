import { useEffect, useState } from "react"
import {useSelector} from "react-redux"
import { getUsers } from "../store/user"
import { useDispatch } from "react-redux"
import Card from "./Card"

const Allusers = () => {
    const[user , setUser]  = useState(null)
    const {users , loading} = useSelector(state => state.users)

    console.log("users : " , users)

    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(getUsers());
    },[])

    if(loading) {
        return <h1> loading......</h1>
      }
  return (
    <div>
        {
            users  && users.map((ele) =><div key={users.id} className="bg-warning flex">
               <div>
               <h1>{ele.name}</h1>
                <p>{ele.email}</p>
                <p>{ele.age}</p>
               </div>

            </div>)
        }
    </div>
  )
}

export default Allusers