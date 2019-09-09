import React, { Component } from 'react';
import Header from './Header';
import AddNewItem from './AddNewItem';
import TodoList from './TodoList';


class App extends Component {
  render() {
    // console.log(this.props.children);
    return (
      <div className="container">
        <Header />
        <AddNewItem />
        <TodoList />
        
      </div>
    )
  }
}

export default App;
