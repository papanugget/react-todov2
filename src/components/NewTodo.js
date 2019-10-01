import React from 'react';

const NewTodo = (props) => {
    const addTask = props.addTask;
    const createTask = props.createTask;
    return(
        <form onSubmit={addTask}>
            <div className="row">
                <div className="col">
                    <input type="text" placeholder="enter a task" size="lg" className="form-control" onChange={createTask} id="task-entry"/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    <button type="reset" className="btn btn-warning btn-block">cancel</button>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-primary btn-block">add task</button>
                </div>
            </div>
        </form>
    );
}

export default NewTodo;