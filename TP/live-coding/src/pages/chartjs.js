import React from "react";
import {Bar} from "react-chartjs-2";
import {Chart as chartjs} from "chart.js/auto";

class ChartBar extends React.Component {

    render() {
        return(
            <div style={ {width:300} }>
                <Bar
                 data={{
                    labels:this.props.dataProps.map((value)=>value.Nom),
                    datasets:[{
                        label:"durée de tache (/h)",
                        data:[4,6,1,13,23],
                        backgroundColor:["#ADD8E6"],
                        indexAxis: "y",
                    }],
    
                }}
                />
           
            </div>
        )
    }
}

export default ChartBar;