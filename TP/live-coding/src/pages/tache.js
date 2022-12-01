import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

class Tache extends React.Component{
   

    state={
        data:[],
        nom:'',
        id:''
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/tache")
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    handleChange=(e)=>{
        this.setState({
              nom:e.target.value
        })
      
    }
    
    handleClick=(e)=>{
           e.preventDefault()
           axios.post("http://127.0.0.1:8000/api/store",this.state)
           .then(res=>{
            alert("vous êtes sur d'ajouter")
            window.location.reload()
           })
    }
    handleDelete=(id)=>{
        axios.delete("http://127.0.0.1:8000/api/delete/"+id)
        .then(res=>{
            alert("vous êtes sur suprimer")
            window.location.reload()
        })
    }
    handleEdit=(id)=>{
        let btnAjouter = document.querySelector("#btnAjouter")
        let btnModifier = document.querySelector("#btnModifier")
        btnAjouter.style.display="none";
        btnModifier.style.display="inline"
        axios.get("http://127.0.0.1:8000/api/edit/"+id)
        .then(res=>{
            this.setState({
                nom:res.data.Nom,
                id:res.data.id
            })
        })
    }
    handleModifier=(e)=>{
        e.preventDefault()
        const id = this.state.id
        axios.put("http://127.0.0.1:8000/api/update/"+id,this.state)
        .then(res=>{
            alert("vous êtes sur modifier")
            window.location.reload()
        })
    }
    render(){
        return(
            <div>
                <div />
                <form>
                       <input onChange={this.handleChange} value={this.state.nom}></input>
                       <button onClick={this.handleClick} className="btn btn-primary" id='btnAjouter'>Ajouter</button>
                       <button onClick={this.handleModifier} className="btn btn-warning" id='btnModifier' style={{display:"none"}} >Modifier</button>
                </form>
                <div />
                <table className='table'>
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
                            <button className='btn btn-warning'onClick={this.handleEdit.bind(this,value.id)}>Edit</button>
                            <button className='btn btn-danger' onClick={this.handleDelete.bind(this,value.id)}>Suprimer</button>
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