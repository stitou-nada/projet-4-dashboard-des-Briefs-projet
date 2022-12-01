import React from "react";
import {Bar} from "react-chartjs-2";
import {chart as chartjs} from"chart.js/auto";


class Chart extends React.Component{
    render(){
       
        return(
            <div style={ {width:300} }>
                <Bar data={{
                     labels:this.props.data.map((value)=>value.Nom),
                     datasets:[{
                         label:"durée de tache (/h)",
                         data:[12,40,30,60],
                         backgroundColor:["#ADD8E6"],
                         indexAxis: "y",
                     }],
                } }/>
            </div>
        )
    }
}
export default Chart;