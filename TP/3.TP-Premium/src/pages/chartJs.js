import React from "react";
import {Bar} from"react-chartjs-2";
import {chart as chartjs} from"chart.js/auto";

class ChartBar extends React.Component{
    state={
        labels:[],
        datasets:[{
            label:"durée de tache (/h)",
            data:[12,40,30,60],
            backgroundColor:["blue"],
            indexAxis: "y",
        }],
    }
    render(){
        return(
            <div style={ {width:300} }>
                <Bar data={this.state}/>
            </div>
        )
    }
}
export default ChartBar ;