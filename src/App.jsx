import { useEffect, useState } from "react";
import Home from "./component/Home"
import {Route,Routes, useNavigate} from "react-router-dom";
import Login from "../../frontend/src/Login";
import {ToastContainer} from "react-toastify";
import { handleSuccess } from "../../frontend/src/Util";
function App() {
  const[loggedinUser,setloggendUser]=useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    setloggendUser(localStorage.getItem('loogedinUser'));
  },[])

  const handleLogOut=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedinUser');
    handleSuccess("User Loggedout");
    setTimeout(()=>{
      window.location.href="http://localhost:5173/login";
    },1000)
  }
  return (
    <>
    <Routes>
      <Route path="/*" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    <div className="conatiner">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <h1>{loggedinUser}</h1>
          <button onClick={handleLogOut}>Logout</button>
          <ToastContainer/>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
    </>
  )
}

export default App
