import './App.css';
import Header from './Mycomponents/Header';
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";
import { AddTodo} from "./Mycomponents/AddTodo";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=> {
    console.log("I am onDelete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((d)=>{
      return d!==todo;
    }))

  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "go to the market",
      desc: "to buy t-shirt,you need to go to market"
    },
    {
      sno: 2,
      title: "go to the gym",
      desc: "to remain fit and bulky, you need to go to gym"
    },
    {
      sno: 3,
      title: "go to the shop",
      desc: "to buy coca-cola,you need to go to shop"
    }
  ]);

  return (
    <>
    <Header title="My Todos List" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
