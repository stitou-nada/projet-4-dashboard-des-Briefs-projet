import logo from './logo.svg';
import './App.css';
import Tache from "./pages/tache";
import ChartBar from './pages/chartJs';



function App() {

  
  return (
    <section className="vh-100" >
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-9 col-xl-7">
          <div className="card rounded-3">     
     <Tache />
        </div>  
     <ChartBar />
      </div>
    </div>
  </div>
      </section>
  );
}

export default App;
