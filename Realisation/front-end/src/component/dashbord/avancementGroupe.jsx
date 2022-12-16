import axios from "axios";
import React from "react";
import Cookies from "universal-cookie/cjs/Cookies";
import QuickChart from "quickchart-js";


class Groupe extends React.Component{

    state={
        AvancementGroupe:"",
        ChartImagee:""
    }

componentDidMount(){
    const cookie = new Cookies()
    axios.get("http://127.0.0.1:8000/api/groupe/"+cookie.get('idFormateur'))
    .then(response=>{
        this.setState({
            AvancementGroupe:response.data.AvancementGroupe[0].Percentage
    })
    })



}

render(){

    
const myChart = new QuickChart();

myChart.setConfig({
  type: "radialGauge",
  data: {
    datasets: [
      {data: [this.state.AvancementGroupe], backgroundColor: 'green'},
    ],
    
  },
  
});
const chartImagee = myChart .getUrl();

    return(
        <div>
            <h3>Etat d' avancement du groupe:</h3>
        <img src={chartImagee} style={{width:250 }} alt="" />
        </div>
    )
}


}

export default Groupe;