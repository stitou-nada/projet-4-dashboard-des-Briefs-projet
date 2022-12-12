import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";

class Tache extends React.Component {

    state={
        data:[],
        nom:'',
        shoNom:''
       
    }
    componentDidMount(){
         axios.get("http://127.0.0.1:8000/api/tache")
         .then(response=>
            this.setState({
                data: response.data
            })
           
            
         )
    }
    handleChange=(e)=>{
       this.setState({
        nom:e.target.value
       })
    }
    handleClick=(e)=>{
        e.preventDefault()
       axios.post("http://127.0.0.1:8000/api/store",this.state)
       .then(response=>{
        window.location.reload()
       })
    }
    handleModifier=(e)=>{
        e.preventDefault()
       axios.put("http://127.0.0.1:8000/api/update/"+this.state.id,this.state)
       .then(response=>{
        window.location.reload()
       })
    }
    handleEdit=(id)=>{
       axios.get("http://127.0.0.1:8000/api/edit/"+id)
       .then(response=>{
        this.setState({
            nom:response.data.Nom,
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
             Enter tache:<input value={this.state.nom} onChange={this.handleChange}></input>
             <button onClick={this.handleClick}>ajouter</button>
             <button onClick={this.handleModifier}>modifier</button>
             
             
           </form>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.data.map((value)=>
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.Nom}</td>
                        <td>
                            <button onClick={this.handleEdit.bind(this,value.id)}>Edit</button>
                            <button onClick={this.handleDelete.bind(this,value.id)}>Supprimer</button>
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