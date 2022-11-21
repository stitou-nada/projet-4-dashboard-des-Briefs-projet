import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import "style.css";
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
                nom:response.data.nom,
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
            <section className="vh-100" style={{backgroundColor: '#eee'}}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                  <div className="card rounded-3">
                    <div className="card-body p-4">
                      <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                        <div className="col-12">
                      <input value={this.state.nom} onChange={this.handleChange} placeholder="Enter nom de tache"></input>
                    <button onClick={this.handleClick} className="btn btn-primary">Add</button>
                    {/* <button onClick={this.handleClick} className="btn btn-primary">up</button> */}
                    <button onClick={this.handleUpdate} className="btn btn-success">Update</button>
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
                {this.state.data.map((value)=>(

                
                <tr key={value.id}>
                    <td scope="row">{value.id}</td>
                    <td>{value.Nom}</td>
                    <td style={{width: '216px'}}>
                        <button class='btn btn-danger' onClick={()=>this.handleDelete(value.id)}>suprimer</button>
                        <button class='btn btn-success' onClick={()=>this.handleEdit(value.id)}>Modifier</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>
        )
    }
}
export default Tache;