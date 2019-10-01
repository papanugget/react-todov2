import React from 'react';
import TodoItem from './TodoItem';

const TaskDisplay = (props) => {
    const tasks = props.tasks;
    const markImportant = props.markImportant;
    const deleteTask = props.deleteTask;
    const markDone = props.markDone;
    const renderedList = tasks.map((task, idx) => {
       return  <TodoItem key={task.key} task={task} markImportant={markImportant} deleteTask={deleteTask} markDone={markDone} id={idx}/>
    })
    if(tasks.length !== 0) {
        return(
            <React.Fragment>
                <h2>List of tasks</h2>
                <ul className="list-group">
                    {renderedList}
                </ul>
            </React.Fragment>
        );
    } else {
        return null;
    }

}


export default TaskDisplay;