import "./form.css"
import {useForm} from "react-hook-form"

const Form = () => {
  const{register , handleSubmit} = useForm();
  const submit = async(data)=>{
    console.log(data);
  }

  return (
   <div>
       <form className="form" onSubmit={handleSubmit(submit)}>
  <input placeholder="Enter your name" className="input" type="text" {...register("name")}/>
  <input placeholder="Enter your email" className="input" type="text" {...register("email")}/>
  <input placeholder="Enter your age" className="input" type="text"{...register("age")}/>
    <input placeholder="*********" className="input" type="password" {...register("password")}/>

  <button>Submit</button>
</form>
   </div>
  )
}

export default Form