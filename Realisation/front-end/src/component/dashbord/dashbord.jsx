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
         
        <div>
            <h3 id="titre-tableau">Tableau de bord  d'état d'avancement</h3>
          <Container  >
      <Navbar expand="lg" variant="light" bg="light"  >
        <Container id="size">
          <Navbar.Brand  id="Brand" href="#"><img src={this.state.groupe.Logo}></img> Logo</Navbar.Brand>
          <Navbar.Brand  id="Brand" href="#">{this.state.groupe.Nom_groupe}</Navbar.Brand>
          <Navbar.Brand  id="Brand" href="#">{this.state.ToutalApprenants} apprenants</Navbar.Brand>
          <Navbar.Brand  id="Brand" href="#"> Année {this.state.groupe.Annee_scolaire}</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
        <div className="container " id="tout">
            <div className="row">
         {/* Avancement de groupe */}
         <div className=" col-6">
        <Groupe/>
         </div>
         <div className="col-6" id="cadreApprenant">
            <h3 id="titreApprenant">Etat d'avencement des apprenants :</h3>
           <Apprenants/>
         </div>
         {/* Avancement de brief */}
         <div className="col-6" id="cadreBrief">
            <h3 id="titreBrief">Etat d'avencement de brief :</h3>
            <Brief />
         </div>

        </div>
        </div>
        </div>
        
    )
}
    
}
export default Dashbord;