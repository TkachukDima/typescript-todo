import React, { Component } from 'react';
import Header from './Header';
import AddNewItem from './AddNewItem';
import TodoList from './TodoList';


class App extends Component {
  render() {
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
