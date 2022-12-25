import React from "react";
import axios from "axios";
import Cookies from "universal-cookie/cjs/Cookies";
import QuickChart from "quickchart-js";
import "bootstrap/dist/css/bootstrap.min.css";
class Brief extends React.Component{

    state={
        listBrief:[]
    }
componentDidMount(){
    const cookie = new Cookies()
    axios.get("http://127.0.0.1:8000/api/groupe/"+cookie.get('idFormateur'))
    .then(response=>{
       this.setState({
          listBrief:response.data.ListBriefs
       })
    })
   


}
render(){
    //appré selectioner anné scolaire
    if(this.props.IdGroupe){
        const idGroupe= this.props.IdGroupe
        axios.get("http://127.0.0.1:8000/api/AvancementBrief/"+ idGroupe)
        .then(response=>{
            // console.log(response.data)
            this.setState({
                listBrief:response.data
        })
        })
    
    }



    
    return(
        <div >
            {this.state.listBrief.map((value)=>
           <div  key={value.id} id="DivChart">

           <div  >
                  {value.Nom_du_brief}
            </div>
           
          <div className="progress" id="ChartBrief" > 
             <div className="progress-bar" role="progressbar" style={{width: value.Percentage + "%" }}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{value.Percentage}</div>
          </div>
          </div>
              )}
                   
 
        </div>

        
    )
}

}

export default Brief;