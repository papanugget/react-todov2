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
    if(this.state.item !== "") {
      let newTask = {
        task: this.state.item,
        key: Date.now(),
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
    input.value = "";
  }
  markImportant(e) {
    const li = e.target.parentNode.parentElement;
    li.classList.toggle('important');
  }
  deleteTask(e) {
    const li = e.target.parentNode.parentElement;
    const newTaskList = this.state.taskList.filter((task, idx) => idx !== Number(li.id));
    this.setState({
      taskList: newTaskList
    });
  }
  markDone(e){
    const li = e.target.parentNode.parentElement;
    li.classList.toggle('done');
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