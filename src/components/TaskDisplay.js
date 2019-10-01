import React from 'react';
import TodoItem from './TodoItem';

const TaskDisplay = (props) => {
    const tasks = props.taskList;
    const renderedList = tasks.map(task => {
       return  <TodoItem className="list-group-item" key={task.key}>{task.task}</TodoItem>
    })
    return(
        <ul className="list-group">
            {renderedList}
        </ul>
    );
}


export default TaskDisplay;