const Todo = () => {
    const [inputTask, setInputTasks] = React.useState('');
    const [tasks, setTasks] = React.useState([]);

    let handleClick = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    let addTask = () => {
        if (inputTask.trim() === '') return;
        const newTask = {id: Date.now(), text: inputTask, confirmed: false};
        setTasks([...tasks, newTask]);
        setInputTasks('');
    }

    let removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    let toggleTask = (taskId) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {...task, confirmed: !task.confirmed};
            }
            return task;
        }));
    }
    return (
        <div className="container" >
            <div className="row justify-content-center"  >
                <div className="col-md-6" >
                    <div className="card mt-5">
                        <div className="card-body">
                            <h5 className="card-title" >Todo List</h5>
                            <div className="form-group">
                                <input
                                    type="text"
                                    maxLength={'15'}
                                    className="form-control"
                                    placeholder="Enter Your Task"
                                    value={inputTask}
                                    onChange={(e) => setInputTasks(e.target.value)}
                                    onKeyUp={handleClick}
                                />
                            </div>
                            <button onClick={addTask} className="btn btn light mb-3">Add Task</button>
                            <ul className="list-group">
                                {tasks.map((task, index) => (
                                    <li key={task.id}
                                        className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>{index + 1}. {task.text}</span>
                                        <div>
                                            <button onClick={() => toggleTask(task.id)}
                                                    className={`btn ${task.confirmed ? 'btn success' : 'btn white'} mr-2`} style={{border:"2px solid black"}}>
                                                {task.confirmed ? 'Confirmed' : ' Confirmed'}
                                            </button>
                                            <button onClick={() => removeTask(task.id)} className="btn red">
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<div >
    <Todo/>
</div>,root);
