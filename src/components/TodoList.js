import React from 'react';
import NewTodo from './NewTodo';

const TodoList = (props) => {
    // console.log(props);
    return(
        <div className="todoListMain">
            <div className="header">
                <NewTodo createTask={props.createTask} addTask={props.addTask}/>
            </div>
        </div>

    );
}

export default TodoList;