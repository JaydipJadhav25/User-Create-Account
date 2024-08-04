import { useEffect  } from "react"
import {useSelector} from "react-redux"
import { getUsers } from "../store/user"
import { useDispatch } from "react-redux"
// import Card from "./Card"
import { Link } from "react-router-dom"
import "./user.css"
const Allusers = () => {
    // const[user , setUser]  = useState(null)
    const {users , loading ,searchData } = useSelector(state => state.users)

   
    console.log(  "searchData is : " ,  searchData);

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
      <div className="container">
      {
        users && 
        
           users
          //  .filter((ele) =>{
          //   if(searchData.length === 0 ){
          //     return ele;
          //   }
          //   else{
          //     return ele.name.toLowerCase().includes(searchData.name.toLowerCase());
          //   }
          //  })
          .filter((ele) =>{
            if(searchData.length === 0){
              return ele;
            }
            else{
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
           })
      
        .map((ele) =><div key={users.id} className="container1">
               <div className="card">
                  <h2> {ele.name}</h2>
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