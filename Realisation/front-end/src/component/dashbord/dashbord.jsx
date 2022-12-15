import React from "react";
import Cookies from "universal-cookie/cjs/Cookies";


class Dashbord extends React.Component{
   
render(){
    const cookies = new Cookies()

    return(
        <div>
          <h1> hello nada a dashbord</h1> 
          {cookies.get('idFormateur')}
        </div>
    )
}
    
}
export default Dashbord;