// import React from 'react'
import "./home.css"
import { Link } from "react-router-dom"
const Home = () => {
  return (
   <>
       <div className="home">
      <div className="myimage">
        <img src="https://res.cloudinary.com/mudemoenv/image/upload/v1717221283/njyhut3dg4nmpvnc41g2.jpg" alt="jaydipJadhav" width="300px"/>

      </div>
      <div className="text">
        <h2>Jaydip Dhananjay Jadhav</h2>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos architecto, quibusdam aspernatur autem rerum maxime laborum neque, voluptatem numquam eius est sapiente repellendus. Sapiente quae officia temporibus cum enim tenetur!</p>
      </div>
    </div>
    <div className="btnbox">
    <button type="button" className="btn btn-success"
    >
      <Link to="/info">info</Link>
    </button>
    <button type="button" className="btn btn-warning">
    <Link to="/users">AllUsers</Link>
      
    </button>
    </div>
   </>
  )
}

export default Home