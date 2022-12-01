import React from 'react';

class Tache extends React_Component{
   

    state={
        data:[],
        nom:''
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/tache")
    }
}