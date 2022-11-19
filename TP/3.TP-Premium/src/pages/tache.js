import React from 'react';
import axios from 'axios';


class Tache extends React.Component{

    state={
        nom:"",
        data:[]

    }
    componentDidMount(){
        
        axios.get("http://127.0.0.1:8000/api/tache")
        .then(res=>{
            this.setState({
             data:res.data
        })
        })
    }

    render(){
        return(
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
                        <a className='btn btn-danger'>suprimer</a>
                        <a className='btn btn-info'>edit</a>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        )
    }
}
export default Tache;