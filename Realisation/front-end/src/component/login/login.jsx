import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
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
   
    return(
        <div>
            <form action="">
                <input type="text" onChange={handleChangeNom} placeholder="Nom" /><br/>
                <input type="text" onChange={handleChangeEmail}  placeholder="Email" /><br />
                <button onClick={handleClick}>Login</button>
                
            </form>
        </div>
    )
   
}
export default Login;