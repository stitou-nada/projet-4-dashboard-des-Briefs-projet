import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class Tache extends React.Component{

    state={
        nom:"",
        data:[],
        id:""

    }
    componentDidMount(){
        
        axios.get("http://127.0.0.1:8000/api/tache")
        .then(response=>{
            this.setState({
             data:response.data
            })
        })
    }
    handleChange=(e)=>{
       this.setState({
               nom:e.target.value
       })  
    }
    handleClick =async(btn)=>{
        btn.preventDefault()
        await axios.post("http://127.0.0.1:8000/api/store",this.state.nom)
        .then(response=>{
             window.location.reload(false)
        })
    }
    handleDelete=(id)=>{
                axios.delete("http://127.0.0.1:8000/api/delete/"+id)
                .then(response=>{
                    window.location.reload(false)

                })
    }
    handleEdit=async(id)=>{
        // id.preventDefault()
        
       await axios.get("http://127.0.0.1:8000/api/edit/"+id)
        .then(response=>{
            this.setState({
                nom:response.data.Nom,
                id:response.data.id
            })
        })
        
    }
    handleUpdate= async(e)=>{
         e.preventDefault()
       const id=this.state.id
        axios.put("http://127.0.0.1:8000/api/update/"+id,this.state.nom)
        .then(response=>{
            alert('data has been updated')
        })
        window.location.reload(false)

    }

    render(){
        return(
            <div>
            <form>
                     Ajouter nom de tache <input value={this.state.nom} onChange={this.handleChange}></input>
                    <button onClick={this.handleClick} className="btn btn-primary">Add</button>
                    {/* <button onClick={this.handleClick} className="btn btn-primary">up</button> */}
                    <button onClick={this.handleUpdate} className="btn btn-success">Update</button>

            </form>
            
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map((value)=>(

                
                <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.Nom}</td>
                    <td>
                        <button class='btn btn-danger' onClick={()=>this.handleDelete(value.id)}>suprimer</button>
                        <button class='btn btn-success' onClick={()=>this.handleEdit(value.id)}>Modifier</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
        
        )
    }
}
export default Tache;