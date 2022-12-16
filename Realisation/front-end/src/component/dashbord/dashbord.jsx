import axios from "axios";
import React from "react";
import Cookies from "universal-cookie/cjs/Cookies";
import Apprenants from "./avancementApprenants";
import Brief from "./avancementBrief";
import Groupe from "./avancementGroupe";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import "./style.css";


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
   
    return(
         
        <div >
            
            <h3 >
                Tableau de borde d'état d'avancement
            </h3>
          
          <Container  >
      <Navbar expand="lg" variant="light" bg="light"  >
        <Container>
          <Navbar.Brand href="#"><img src={this.state.groupe.Logo}></img> Logo</Navbar.Brand>
          <Navbar.Brand href="#">{this.state.groupe.Nom_groupe}</Navbar.Brand>
          <Navbar.Brand href="#">{this.state.ToutalApprenants} apprenants</Navbar.Brand>
          <Navbar.Brand href="#">{this.state.groupe.Annee_scolaire}</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
   
         {/* Avancement de groupe */}
         <div>
        <Groupe/>
         </div>
         {/* Avancement de brief */}
         <div>
            <h3>Etat d'avencement de brief :</h3>
            <Brief />
         </div>
         <div>
            <h3>Etat d'avencement des apprenants :</h3>
           <Apprenants/>
         </div>
        </div>
    )
}
    
}
export default Dashbord;