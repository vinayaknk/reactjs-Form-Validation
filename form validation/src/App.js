import React, { Component } from "react";
import "./App.css";
import TodoItem from "./ToDo/TodoItem.jsx";
import TodoItemList from "./ToDo/TodoData.jsx";
import NewApp from "./Conditional/NewApp.jsx";
import FormValidation from "./Components/FormValidation.jsx";

class App extends Component {
  state = {
    todo: TodoItemList
  };
  constructor() {
    super();
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(id) {
    const updatedTodo = this.state.todo.map(x => {
      if (x.id === id) {
        x.completed = !x.completed;
      }
      return x;
    });
    this.setState({ todo: updatedTodo });
  }

  render() {
    // const newToDoarray = this.state.todo.map(item => (
    //   <TodoItem key={item.id} ToDo={item} change={this.handleCheck} />
    // ));
    // return <div className="container-xl">{newToDoarray}</div>;
    return (
      <div className="container">
        {/* <NewApp /> */}
        {<FormValidation />}
      </div>
    );
  }
}

// class App extends Component {
//   state = {
//     name: "vinayak"
//   };
//   render() {
//     return (
//       <div>
//         <h2>{this.state.name}</h2>
//         <button onClick={() => this.setState({ name: "vnk" })}>Change</button>
//       </div>
//     );
//   }
// }

export default App;

/* <ContactCard contact={{name: "Mr. Vinayak",phone: "11111",Email: "abc@gmail.com"}}/>
<ContactCard contact={{phone: "222222",Email: "xyz@gmail.com"}}/>
<ContactCard contact={{ name: "Mr. VNK", phone: "33333", Email: "pqr@gmail.com" }}/> */

// const productsComponents = ProductsData.map(item => <Prod key={item.id} product={item} />)
// import MyInfo from "./MyInfo";
// import MainContent from "./MainContent.jsx";
// import ContactCard from "./ContactCard.jsx";
// import ProductsData from './FruitProducts.jsx'
// import Prod from './Products'

/* <p>
{this.state.name} , you are currently logged{" "}
{this.state.logged ? "In" : "Out"}
</p> */
