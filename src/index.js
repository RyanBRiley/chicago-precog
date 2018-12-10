import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const csv=require('csvtojson')

//var csv is the CSV file with headers

  



    ReactDOM.render(<App />, document.getElementById('root'))
   
// .then(res => { const jsonData = csvJSON(res.data)
    // })
    // .then(
    // ReactDOM.render(<App crimes={jsonData}/>, document.getElementById('root'))
    // )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
