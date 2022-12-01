import logo from './logo.svg';
import './App.css';
import Tache from "./pages/tache";
import ChartBar from './pages/chartJs';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state ={
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
  render(){
  return (
    <section className="vh-100" >
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-9 col-xl-7">
          <div className="card rounded-3">     
     <Tache />
        </div>  
     <ChartBar data={this.state.data} />
      </div>
    </div>
  </div>
      </section>
  );
}
}

export default App;
