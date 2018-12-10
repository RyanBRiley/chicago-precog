import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
// const csv=require('csvtojson')

//var csv is the CSV file with headers
function csvJSON(csv){

    var lines=csv.split("\n");
  
    var result = [];
  
    var headers=lines[0].split(",");
  
    for(var i=1;i<1000;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
       
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        if (Number(obj.Latitude) > 40 && 
            Number(obj.Latitude) < 42 &&
            Number(obj.Longitude) > -89 && 
            Number(obj.Longitude) < -86) {
                result.push(obj);
        }
  
    }
    
    return result; //JavaScript object
    // return JSON.stringify(result); //JSON
  }
  

axios.get('https://s3.amazonaws.com/crimes-in-chicago/Chicago_Crimes_2012_to_2017_condensed.csv')
    .then(res => {  ReactDOM.render(<App CRIMES={csvJSON(res.data)}/>, document.getElementById('root'))
    })

   
// .then(res => { const jsonData = csvJSON(res.data)
    // })
    // .then(
    // ReactDOM.render(<App crimes={jsonData}/>, document.getElementById('root'))
    // )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
