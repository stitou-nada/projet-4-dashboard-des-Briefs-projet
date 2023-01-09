import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Tache extends React.Component {

    state={
        data:[],
        name:'',
       
    }
    componentDidMount(){
         axios.get("http://127.0.0.1:8000/api/tache")
         .then(response=>
            this.setState({
                data: response.data
            }) )
    }
    handleChange=(e)=>{
       this.setState({
        name:e.target.value
       })
    }
    handleClick=(e)=>{
        e.preventDefault()
       axios.post("http://127.0.0.1:8000/api/store",this.state)
       .then(response=>{
        axios.get("http://127.0.0.1:8000/api/tache")
        .then(response=>
           this.setState({
               data: response.data
           }) )
       })
    }
    handleModifier=(e)=>{
        e.preventDefault()
       axios.put("http://127.0.0.1:8000/api/update/"+this.state.id,this.state)
       .then(response=>{
        axios.get("http://127.0.0.1:8000/api/tache")
        .then(response=>
           this.setState({
               data: response.data,
               name:''
           }) )
       })
    }
    handleEdit=(id)=>{
        let btnAjouter = document.querySelector("#btnAjouter")
        let btnModifier = document.querySelector("#btnModifier")
        btnAjouter.style.display = "none"
        btnModifier.style.display = "inline"
       axios.get("http://127.0.0.1:8000/api/edit/"+id)
       .then(response=>{
        this.setState({
            name:response.data.name,
            id:response.data.id

        })
       })
    }
    handleDelete=(id)=>{
        axios.delete("http://127.0.0.1:8000/api/delete/"+id)
        .then(response=>{
            window.location.reload()
           })
    }
    render(){
       console.log(this.state)
        return(
            <div>
           <form>
             Enter tache:<input value={this.state.name} onChange={this.handleChange}></input>
             <button className="btn btn-primary" onClick={this.handleClick} id="btnAjouter">ajouter</button>
             <button className="btn btn-warning" onClick={this.handleModifier} id="btnModifier" style={{display:"none"}}>modifier</button>
             
             
           </form>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.data.map((value)=>
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>
                            <button className="btn btn-warning" onClick={this.handleEdit.bind(this,value.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={this.handleDelete.bind(this,value.id)}>Supprimer</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            </div>
        )
    }
}
export default Tache;