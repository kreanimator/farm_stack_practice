import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   <div className="App">
      <div className="list-group-item justify-content-center align-items-center mx-auto"
        style={{
          "width": "400px",
          "marginTop": "15px"
        }}>
        <h1 className="card text-white mb-1" style={{ "backgroundColor": "#ffc21e", "maxWidth": "20rem" }}>
          Task Manager
        </h1>
      </div>
    </div>
  );
}

export default App;
