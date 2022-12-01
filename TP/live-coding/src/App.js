import logo from './logo.svg';
import './App.css';
import Tache from './pages/tache';
import Chart from './pages/chartjs';
import React from 'react';
import axios from'axios';

class App extends React.Component{
  constructor(props){

  super(props)
  this.state={
    data:[],
    nom:'',
    id:''
  }
}
  componentDidMount(){
    axios.get("http://127.0.0.1:8000/api/tache")
    .then(res=>{
        this.setState({
            data:res.data
    })
})
}
  render(){
    console.log(this.state)

  return (
    <div >
      <Tache />
      <div>
      <Chart data={this.state.data} />
    </div>
    </div>
  );
}
}

export default App;
