import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
function Login (){

 const navigate= useNavigate()
 const cookies = new Cookies()

    const[Data, setData] = useState([])
    const[Nom, setNom] = useState([])
    const[Email, setEmail] = useState([])
    useEffect(()=>{
        
           axios.get("http://127.0.0.1:8000/api/formateur")
           .then(response=>{
            
            setData(response.data)
            console.log(response.data)

           })
    },[])
    const handleChangeNom=(e)=>{
        e.preventDefault()
       
        setNom(e.target.value)
      
    }
    const  handleChangeEmail=(e)=>{
            setEmail(e.target.value)
        
    }
     const  handleClick=(e)=>{
        e.preventDefault()
           let data = Data
           let nom = Nom
           let email = Email

           data.map((value)=>{

             if (nom == value.Nom_formateur && email==value.Email_formateur) {
                cookies.set('idFormateur',value.id)
                return navigate("/Dashbord")

              }
      
       
    })
       
    }
   
    
    return (
    <div style={{    marginLeft: 662 , marginTop: 78}}>
      
      <form>
        {/* Email input */}
        <div className="form-outline mb-4" style={{width: 189}}>
        
          <input type="text" id="form2Example1" className="form-control" onChange={handleChangeNom} placeholder="Nom" />
        </div>
        {/* Password input */}
        <div className="form-outline mb-4" style={{width: 189}}>
          
          <input type="email" id="form2Example2" className="form-control" onChange={handleChangeEmail} placeholder="Email"/>
        </div>
        
        {/* Submit button */}
        <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleClick}>Login</button>
       
      </form>
      </div>
    );
  

   
}
export default Login;