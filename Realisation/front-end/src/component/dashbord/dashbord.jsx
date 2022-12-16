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
            <div>
            ;<div className="wrapper d-flex align-items-stretch">
  <nav id="sidebar" className="active">
    <div className="custom-menu">
      <button type="button" id="sidebarCollapse" className="btn btn-primary">
        <i className="fa fa-bars" />
        <span className="sr-only">Toggle Menu</span>
      </button>
    </div>
    <div className="p-4">
      <h1>
        <a href="index.html" className="logo">
          Flash
        </a>
      </h1>
      <ul className="list-unstyled components mb-5">
        <li className="active">
          <a href="#">
            <span className="fa fa-home mr-3" /> Home
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa fa-user mr-3" /> About
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa fa-briefcase mr-3" /> Portfolio
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa fa-sticky-note mr-3" /> Blog
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa fa-paper-plane mr-3" /> Contact
          </a>
        </li>
      </ul>
      
      <div className="footer">
        <p>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with{" "}
          <i className="icon-heart" aria-hidden="true" /> by{" "}
          <a href="https://colorlib.com" target="_blank">
            Colorlib.com
          </a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </p>
      </div>
    </div>
  </nav>
  {/* Page Content  */}
  <div id="content" className="p-4 p-md-5 pt-5"></div>
</div>

            </div>
        <div>
            
            <h3 >
                Tableau de borde d'état d'avancement
            </h3>
          
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
        </div>
    )
}
    
}
export default Dashbord;