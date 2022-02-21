import React, {Component, useState, useEffect} from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage  from './pages/HomePage';
import { ToDoList } from './pages/ToDoList';
import { NewTodoForm } from './pages/NewTodoForm';
import { ToDoListItem } from './pages/ToDoListItem';
import './App.css';

let fakeTodos = [{
  text: ' Go to market',
  isCompleted: true,
}, {
  text: 'Learn React',
  isCompleted: false,
}]
function App(){

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //fetch otomatik olarak get request atıyor
    fetch('/todos')
      .then(response => response.json())
      .then(todos => setTodos(todos));
      
  }, []);



    const createNewTodo = newTodoText => {
      alert(' Creating new todo: ' + newTodoText)
    }
    const deleteTodo = todoText => {
      alert('todo Deleted ' + todoText)
    }
    const completeTodo = todoText => {
      alert('Completed ' + todoText)
    }
    return (
      //öncelikle tüm appi router içinde compound ediyoruz
      //route iki prop alıyor path ve component 
      <Router>
        <div className="App">
        <Route path="/" component={HomePage} exact/>
        <Route path="/todolist" component={ToDoList} exact/>
        <NewTodoForm onClickCreate={createNewTodo} />
        <ToDoList
          todos={todos}
          onCompleteTodo={completeTodo}
          onDeleteTodo={deleteTodo} />

       

      </div>
      </Router>
      
    );
  }


export default App;
