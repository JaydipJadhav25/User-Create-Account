import "./form.css"
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";
import "./home.css"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../store/user";
import { useCallback, useEffect } from "react";
const Form = () => {
  const{register , handleSubmit , watch , setValue} = useForm();
const dispatch = useDispatch();
const navigate = useNavigate();





  const submit = async(data)=>{
    console.log(data);
    dispatch(createUser(data));
     navigate("/users");
  }
// to create slug
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);

useEffect(() => {
  const subscription = watch((value, { name }) => {
    //check
      if (name === "title") {
        //setvalue slug
        console.log("title is  : " , value.title)
          setValue("name", slugTransform(value.title), { shouldValidate: true });
      } 
  });

  //disallocate value
  return () => subscription.unsubscribe();
}, [watch, slugTransform, setValue]);



  return (
   <div className="formbox">
   {/* <div className="btnbox">
   <button type="button" className="btn btn-danger">
    <Link to="/">Home</Link>
    </button>
    <button type="button" className="btn btn-warning">
    <Link to="/users">AllUsers</Link>
    </button>
   </div> */}
       {/* <form classNameName="form" onSubmit={handleSubmit(submit)}>
  <input placeholder="Enter your name" classNameName="input" type="text" {...register("name")}/>
  <input placeholder="Enter your email" classNameName="input" type="text" {...register("email")}/>
  <input placeholder="Enter your age" classNameName="input" type="text"{...register("age")}/>
    <input placeholder="**Random**" classNameName="input" type="password" {...register("password")}/>

  <button>Submit</button> */}

<div className="container1" onSubmit={handleSubmit(submit)}>
        <form className="form" action="">
            <p className="title">Form</p>
            <input placeholder="enter your name" className="username input" type="title" name="username" {...register("title")}/>
            <input placeholder="Your name " className="username input" type="text" name="name" {...register("name")} readOnly/>
            <input placeholder="email" className="username input" type="text" {...register("email")}/>
            <input placeholder="Age" className="username input" type="text"{...register("age")}/>
            <button className="btn4" type="submit">Submit</button>
        </form>
    </div>






   </div>
  )
}

export default Form