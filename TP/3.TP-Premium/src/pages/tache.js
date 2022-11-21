import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class Tache extends React.Component{

    state={
        nom:"",
        data:[],
        showNom:""

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
        await axios.post("http://127.0.0.1:8000/api/store",this.state)
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

    render(){
        return(
            <div>
            <form>
                     Ajouter nom de tache <input onChange={this.handleChange}></input>
                    <button onClick={this.handleClick} className="btn btn-primary">Add</button>
                    <h5>{this.state.showNom}</h5>
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
                        <button class='btn btn-success'>edit</button>
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