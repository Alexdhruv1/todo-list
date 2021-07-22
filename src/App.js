import './App.css';
import Header from './Mycomponents/Header';
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";

function App() {
  const onDelete = ()=> {
    console.log("I am onDelete");
  }
  let todos = [
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
  ]

  return (
    <>
    <Header title="My Todos List" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
