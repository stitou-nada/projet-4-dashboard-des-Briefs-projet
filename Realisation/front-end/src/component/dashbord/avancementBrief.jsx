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



    
    return(
        <div >
            {this.state.listBrief.map((value)=>
           <div id="DivChart">

           <div key={value.id} >
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