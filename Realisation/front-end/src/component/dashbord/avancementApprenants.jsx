import React from "react";
import axios from "axios";
import Cookies from "universal-cookie/cjs/Cookies";
import QuickChart from "quickchart-js";
class Apprenants extends React.Component{

    state={
        ListBrief:[],
        brief:[]
    }
componentDidMount(){
    const cookie = new Cookies()
    axios.get("http://127.0.0.1:8000/api/groupe/"+cookie.get('idFormateur'))
    .then(response=>{
       this.setState({
          ListBrief:response.data.ListBriefs,
          brief:response.data.LastBrief,
          groupeId:response.data.Groupe.idGroupe

       })
    })
   


}

selectBrief=(e)=>{
  axios.get("http://127.0.0.1:8000/api/BriefSelect/"+this.state.groupeId+"/"+e.target.value)
  .then(response=>{
     this.setState({
        brief:response.data.avancemantBrief
     })
  })


}
render(){



    return(
        <div >

            {/*Selecte brief  */}
           <center id="selecet">
            <select onChange={this.selectBrief}  id="select">
            {this.state.ListBrief.map((value)=>
            <option key={ value.id} value={ value.id}>  {value.Nom_du_brief}</option>  
             )}
             </select>
             </center>
            {/* Liste apprenant */}
              {this.state.brief.map((value)=>
              <div key={Math.random()} id="DivChart-App">
                <p >{value.Prenom} {value.Nom} </p>
        
              <div className="progress" id="ChartApprenant" > 
             <div className="progress-App" role="progressbar" style={{width:value.Percentage + "%" }}  
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{value.Percentage}</div>
          </div>
          </div>
          
              )}


        </div>
    )
}

}

export default Apprenants;