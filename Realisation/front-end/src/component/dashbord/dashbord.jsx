import axios from "axios";
import React from "react";
import Cookies from "universal-cookie/cjs/Cookies";
import Groupe from "./avancementGroupe";


class Dashbord extends React.Component{
   
    state={
        idFormateur:"",
        groupe:[]
    }
    
    componentDidMount(){
        const cookies = new Cookies()
        this.setState({
            idFormateur:cookies.get('idFormateur')
        })
        axios.get("http://127.0.0.1:8000/api/groupe/"+cookies.get('idFormateur'))
        .then(response=>{
            
            this.setState({
             groupe: response.data.Groupe,
             ToutalApprenants: response.data.ToutalApprenants
             
            })
           
        })


    }
render(){
    console.log(this.state)
    return(
        <div>
          <h1> Dasbhord d'état d'avancement</h1> 
       
       <div>
          <ul>
            <li>{this.state.groupe.Nom_groupe} </li>
            <li>{this.state.ToutalApprenants} </li>
            <li>{this.state.groupe.Annee_scolaire} </li>
         </ul>
         </div>
         {/* Avancement de groupe */}
         <div>
        <Groupe/>
         </div>
        </div>
    )
}
    
}
export default Dashbord;