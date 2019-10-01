import React from 'react';

const TodoItem = (props) => {
    const task = props.task;
    const id = props.id;
    const markImportant = props.markImportant;
    const deleteTask = props.deleteTask;
    const markDone = props.markDone;
    return(
        <li className="list-group-item" id={id}>
            {task.task}
            <div className="btn-group float-right" role="group">
                <button type="button" className="btn btn-success" onClick={markDone}>Mark Done</button>
                &nbsp;
                <button type="button" className="btn btn-warning" onClick={markImportant}>Mark Important</button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={deleteTask}>Delete Task</button>
            </div>
        </li>
    );
}

export default TodoItem;