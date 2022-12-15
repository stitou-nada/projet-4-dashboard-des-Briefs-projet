import React from "react";
import axios from "axios";
import Cookies from "universal-cookie/cjs/Cookies";
import QuickChart from "quickchart-js";
class Brief extends React.Component{

    state={
        listBrief:[]
    }
componentDidMount(){
    const cookie = new Cookies()
    axios.get("http://127.0.0.1:8000/api/groupe/"+cookie.get('idFormateur'))
    .then(response=>{
       this.setState({
          listBrief:response.data.ListBrifes
       })
    })
   


}
render(){


    const myChart = new QuickChart();

    myChart.setConfig({
      type: "progressBar",
      data: {
        datasets: [
          {data: this.state.listBrief.map(value=>value.Percentage)},
        ],
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              size: 30, },
            color: (context) =>
              context.dataset.data[context.dataIndex] > 15 ? "#fff" : "#000",
            anchor: (context) =>
              context.dataset.data[context.dataIndex] > 15 ? "center" : "end",
            align: (context) =>
              context.dataset.data[context.dataIndex] > 15 ? "center" : "right",
          },
        },
      },
    });
    const chartImagee = myChart .getUrl();
    
    return(
        <div>
            {this.state.listBrief.map((value)=>
            
              <li key={Math.random()}>  {value.Nom_du_brief}</li>
                
             )}
                     <img src={chartImagee} style={{width:250 }} alt="" />

        </div>
    )
}

}

export default Brief;