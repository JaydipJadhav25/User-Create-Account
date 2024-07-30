import './App.css'
import Userform from "../components/Userform"
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import Allusers from '../components/Allusers'
import Home from '../components/Home'



function App() {
  
  return (
    <>
    
      <BrowserRouter>
          <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/info" element={<Userform/>}/>
         <Route path="/users" element={<Allusers/>}/>
      </Routes>
    {/* <Footer/> */}
      </BrowserRouter>
  
      
    
    </>
  )
}

export default App
