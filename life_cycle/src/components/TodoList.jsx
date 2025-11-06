import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      loading: true,
    };
  }

  componentDidMount() {
    // wait 2 seconds before fetching data
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            todos: data.slice(0, 10), // display first 10 for simplicity
            loading: false, // stop loading after data arrives
          })
        );
    }, 2000); // 2 seconds delay
  }

  render() {
    if (this.state.loading) {
      return <h3>Loading...</h3>; // shows first
    }

    return (
      <div>
        <h2>Todo List:</h2>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;