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

         console.log(this.state.brief)
    const myChart = new QuickChart();

    myChart.setConfig({
      type: "progressBar",
      data: {
        datasets: [
          {data: this.state.brief.map(value=>value.Percentage)},
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

            {/*Selecte brief  */}
          <select onChange={this.selectBrief} name="" id="">
            {this.state.ListBrief.map((value)=>
            <option key={ value.id} value={ value.id}>  {value.Nom_du_brief}</option>
              
                
             )}
             </select>
            {/* Liste apprenant */}
              {this.state.brief.map((value)=>
                <li key={Math.random()}>{value.Prenom} {value.Nom} </li>

              )}

                     <img src={chartImagee} style={{width:250 }} alt="" />

        </div>
    )
}

}

export default Apprenants;