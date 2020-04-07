import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
  };

  addNewTodo = (newTitle) =>{
    const newTodo = {
      title: newTitle,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleCompleted = (clickedId) => {
    this.setState({
      todos: this.state.todos.map(el =>{
          if(el.id === clickedId){
            return{
              ...el,
              completed: !el.completed
            }
          }
          else {
            return el;
          }
        })
    });
    
  };

  clearCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(el => el.completed === false)
        });
  } 

  render() {
    return (
      <div className='App'>
        <h2 className='main-title'>Welcome to My Todo App</h2>
        <div className='box'>
          <TodoForm addNewTodo={this.addNewTodo}
                    clearCompleted={this.clearCompleted}
          />
        </div>
        <div className='box'>
          <TodoList todos={this.state.todos}
                    toggleCompleted={this.toggleCompleted}
           />
        </div>
      </div>
    );
  }
}

export default App;
