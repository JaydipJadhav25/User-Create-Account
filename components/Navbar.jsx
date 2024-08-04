import { Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchUser  } from "../store/user";


const Navbar = () => {
  const {watch ,  register , handleSubmit} = useForm();

  //  const[seachValue, setsearchValue ] = useState(null);

const dispatch = useDispatch();




   useEffect(()=>{
    const subscription = watch((value, { name }) => {
      //check
        if (name === "title") {
          //setvalue 
            
            // console.log(" value is : " , value.title)
            // setsearchValue(value.title);
            
          dispatch(searchUser(value.title));
        } 
    });
  
    return () =>subscription.unsubscribe();

   },[watch , register]);


function submit(data){
  // console.log("data is  : " , data);
}

// console.log("search value is : " , seachValue)



  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">JDJ</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to='/' >home</Link>
            
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to='/info'>Info</Link>
          
        </li>
        <li>
        <Link className="nav-link"  to='/users'>All Users</Link>

        </li>
        
        
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSubmit(submit)}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="title" {...register("title")}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar