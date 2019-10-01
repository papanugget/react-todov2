import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TaskDisplay from './components/TaskDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item:"",
      taskList: [],
    }
    this.createTask = this.createTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  createTask = (task) => {
    this.setState(
      { item: task.target.value }
    );
    // console.log(task.target.value);
    // console.log(this.state);
  }
  addTask = (e) => {
    const input = document.querySelector('#task-entry');
    e.preventDefault();
    // check existence of task in state
    if(this.state.item !== "") {
      let newTask = {
        task: this.state.item,
        key: Date.now()
      }
      this.setState((prevState => {
        return {
          taskList: prevState.taskList.concat(newTask)
        };
      }));
    }
    // clear input box
    input.value = "";
  }
  render() {
    return (
      <div className="container">
        <h1>ToDoList</h1>
        <TodoList addTask={this.addTask} createTask={this.createTask}/>
        <TaskDisplay tasks={this.state.taskList}/>
      </div>
    );
  }
}

export default App;