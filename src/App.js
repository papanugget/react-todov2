import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
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
    this.markImportant = this.markImportant.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.markDone = this.markDone.bind(this);
  }
  createTask = (task) => {
    this.setState(
      { item: task.target.value }
    );
  }
  addTask = (e) => {
    const input = document.querySelector('#task-entry');
    e.preventDefault();
    // check existence of task in state
    if(this.state.item !== "") {
      let newTask = {
        task: this.state.item,
        key: Date.now(),
        important: false,
        done: false,
      }
      this.setState((prevState => {
        return {
          taskList: prevState.taskList.concat(newTask)
        };
      }));
      this.setState({
        item: ""
      });
    }
    // clear input box
    input.value = "";
  }
  markImportant(e) {
    const li = e.target.parentNode.parentElement;
    li.classList.toggle('important');
    console.log(li.id);
    // map array by idx

    // mark array idx as important = true
    console.log(this.state.taskList);
  }
  deleteTask(e) {
    const li = e.target.parentNode.parentElement;
    console.log(li.id);
    // filter array by idx
    const newTaskList = this.state.taskList.filter((task, idx) => idx !== Number(li.id));
    this.setState({
      taskList: newTaskList
    });
    // return new array with idx removed
    console.log(this.state.taskList);
    // remove node from DOM
  }
  markDone(e){
    const li = e.target.parentNode.parentElement;
    li.classList.toggle('done');
    // map array by idx
    // mark array idx as done = true
  }
  render() {
    return (
      <div className="container">
        <h1>ToDoList</h1>
        <TodoList addTask={this.addTask} createTask={this.createTask}/>
        <TaskDisplay tasks={this.state.taskList} markImportant={this.markImportant} deleteTask={this.deleteTask} markDone={this.markDone}/>
      </div>
    );
  }
}

export default App;