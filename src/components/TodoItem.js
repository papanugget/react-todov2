import React from 'react';

const TodoItem = (props) => {
    const task = props.task;
    return(
        <li className="list-group-item">{task.task}</li>
    );
}

export default TodoItem;