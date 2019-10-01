import React from 'react';
import TodoItem from './TodoItem';

const TaskDisplay = (props) => {
    // console.log(props);
    let tasks = props.tasks;
    // console.log(tasks);
    let renderedList = tasks.map((task) => {
       return  <TodoItem key={task.key} task={task}/>
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
        return <span></span>;
    }

}


export default TaskDisplay;