import { useEffect  } from "react"
import {useSelector} from "react-redux"
import { getUsers } from "../store/user"
import { useDispatch } from "react-redux"
// import Card from "./Card"
import { Link } from "react-router-dom"
import "./user.css"
const Allusers = () => {
    // const[user , setUser]  = useState(null)
    const {users , loading} = useSelector(state => state.users)

  

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
        users && users.length ===0 ? <h1>Empty!</h1> : null
      }
      
      <div className="btnbox">
   <button type="button" className="btn btn-danger">
    <Link to="/">Home</Link>
    </button>
    <button type="button" className="btn btn-info">
    <Link to="/info">info</Link>
    </button>
   </div>
   <h1 className="">Total Users :{users && users.length} </h1>
      <div className="box">
      {
            users  && users.map((ele) =><div key={users.id} className="bg-warning flex box2">
               <div>
               <h1>Name : {ele.name}</h1>
                <p>Email : <b>{ele.email}</b></p>
                <p>Age : <b>{ele.age}</b></p>
               </div>

            </div>)
        }
      </div>
    </div>
  )
}

export default Allusers