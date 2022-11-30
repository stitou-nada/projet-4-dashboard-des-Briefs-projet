import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class Tache extends React.Component{
constructor(props){

super(props)
   this.state ={
         data:[],
         nom:'',
         id:''
        }

         
   }
    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/tache")
        .then(res=>{
            this.setState({
                data:res.data
        })
    })
    }

    handleChange = (e)=>{
        this.setState({
            nom:e.target.value
        })
        
    }
    handleClick=(e)=>{
        e.preventDefault()
       axios.post("http://127.0.0.1:8000/api/store",this.state)
       .then(res=>{
            
            window.location.reload()
       })
        }
    handleDelete= (id)=>{
        axios.delete("http://127.0.0.1:8000/api/delete/"+id)
        .then(res=>{
            window.location.reload()
        })
    }
    handleEdit=(id)=>{
        axios.get("http://127.0.0.1:8000/api/edit/"+id)
        .then(res=>{
            this.setState({
                nom:res.data.Nom ,
                id:res.data.id
            })
        })
    }
    handleUpdate=(e)=>{
        e.preventDefault()

        const id = this.state.id
        axios.put("http://127.0.0.1:8000/api/update/"+id,this.state)
        .then(res=>{
             
             window.location.reload()
        })
         }
render(){
        return(
            <div className="card-body p-4">
                      <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                        <div className="col-12">
                        <input value={this.state.nom}  onChange={this.handleChange} placeholder='Enter nom du tache' />
                        
                        <button  onClick={this.handleClick} className='btn btn-primary' >Ajouter</button>
                        <button  onClick={this.handleUpdate} className='btn btn-primary' >Update</button>
                       
                    </div>

            </form>
            
        <table className="table mb-4">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nom</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
               {this.state.data.map((value)=>
                <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.Nom}</td>
                    <td>
                        <button onClick={this.handleEdit.bind(this,value.id)} className='btn btn-warning'>Edit</button>
                        <button onClick={this.handleDelete.bind(this,value.id)} className='btn btn-danger'>Suprimer</button>
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