import logo from './logo.svg';
import './App.css';
import Tache from './pages/tache';
import ChartBar from './pages/chartjs';
import axios from 'axios';
import React from 'react';
class App extends React.Component {
  state={
    data:[],
    nom:'',
    id:''
}

componentDidMount(){
    axios.get("http://127.0.0.1:8000/api/tache")
    .then(res=>{
        this.setState({
            data:res.data
        })
    })
}
  render() {
  return (
    <div className="App">
      
      <Tache />
     <ChartBar  dataProps={this.state.data} />
    </div>
  );
}
}


export default App;
