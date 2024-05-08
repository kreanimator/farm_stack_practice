import logo from './logo.svg';
import './App.css';
import TodoView from './components/TodoListView';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [todoList, setTodoList] = useState([{}])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')


    // Read all todos

  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  // Post a todo
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
};

  return (
   <div className="App">
      <div className="list-group-item justify-content-center align-items-center mx-auto"
        style={{
          "width": "400px",
          "marginTop": "15px",
          "maxWidth": "20rem"
        }}>
        <h1 className="card text-white mb-1" style={{ "backgroundColor": "#ffc21e" }}>
          Task Manager
        </h1>
        <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB </h6>
        <div className="card-body">
        <h5 className="text-white mb-3"> Add Your Task </h5>
        <span className="card-text">
        <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Title'/>
        <input className="mb-2 form-control desIn" onChange={event => setDesc(event.target.value)}   placeholder='Description'/>
        <button className="btn btn-outline-light mx-2 mb-4" style={{'borderRadius':'50px',"fontWeight":"bold"}}
        onClick= {addTodoHandler}
        >
        Add Task </button>
        </span>

        <h5 className="text-white mb-3"> Your Tasks: </h5>
        <div>
        <TodoView todoList={todoList} />
        </div>
        </div>
        <h6 className="text-white py-1 mb-0"> Copyright 2024, All rights reserved &copy; </h6>
      </div>
    </div>
  );
}

export default App;
