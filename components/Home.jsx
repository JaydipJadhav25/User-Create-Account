// import React from 'react'
import "./home.css"
// import { Link } from "react-router-dom"
const Home = () => {
  return (
   <>
       <div className="home">
       <div className="container">
      <div className="image">
        <img src="https://res.cloudinary.com/mudemoenv/image/upload/v1717221283/njyhut3dg4nmpvnc41g2.jpg" alt="jaydipJadhav" width="300px"/>

      </div>
      <div className="info">
        <h2>Jaydip Dhananjay Jadhav</h2>
       <p>As a third-year Computer Engineering student with a passion for Full Stack Web Development, I am dedicated to honing my skills and applying them to real-world projects. Currently, I am thriving in a dynamic Full Stack Web Development Internship at WebStack Academy, where I specialize in MERN (MongoDB, Express.js, React, Node.js) development. Additionally, I am engaged in a Website Design and Development Internship at Internship Studio, my first professional role that started in December.</p>
      </div>
    </div>
       </div>
    <div className="btnbox">
    {/* <button type="button" className="btn btn-outline-success"
    >
      <Link to="/info">info</Link>
    </button>
    <button type="button" className="btn btn-outline-warning">
    <Link to="/users">AllUsers</Link>
      
    </button> */}
    </div>
   </>
  )
}

export default Home