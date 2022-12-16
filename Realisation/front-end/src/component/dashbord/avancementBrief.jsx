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


    const myChart = new QuickChart();

    myChart.setConfig({
      type: "progressBar",
      data: {
        datasets: [
          {data: this.state.listBrief.map(value=>value.Percentage),backgroundColor:['Navy','Teal']},
        ],
      },
      options: {
        plugins: {
          roundedBars: {
            cornerRadius: -40,
            allCorners: true,
          },
          datalabels: {
            font: {
              size: 30, },
            
          },
        },
      },
    });
    const chartImagee = myChart .getUrl();
    
    return(
        <div >
            {this.state.listBrief.map((value)=>
            <div key={value.id}>
                {value.Nom_du_brief}
            </div>
              )}
                     <img src={chartImagee} style={{ width:250}} alt="" />

        </div>

        
    )
}

}

export default Brief;