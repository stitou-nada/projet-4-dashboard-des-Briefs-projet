import React from "react";
import axios from "axios";
class Login extends React.Component{
   
    state={
         data:[],
         nom:'',
         email:'',
         
    }
    componentDidMount(){
        
           axios.get("http://127.0.0.1:8000/api/formateur")
           .then(response=>{
            this.setState({
                data:response.data
            })

           })
    }
    handleChangeNom=(e)=>{
        e.preventDefault()
        this.setState({
            nom:e.target.value
        })
    }
    handleChangeEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
        
    }
    handleClick=(e)=>{
        e.preventDefault()
       let data = this.state.data
       let nom = this.state.nom
       let email = this.state.email
       data.map((value)=>{

        if (nom == value.Nom_formateur && email==value.Email_formateur) {
            console.log("rrrrrrrr")
        }
      
       
    })
       
    }
   render(){
    // console.log(this.state)
    return(
        <div>
            <form action="">
                <input type="text" onChange={this.handleChangeNom} placeholder="Nom" /><br/>
                <input type="text" onChange={this.handleChangeEmail}  placeholder="Email" /><br />
                <button onClick={this.handleClick}>Login</button>
                
            </form>
        </div>
    )
   }
}
export default Login;