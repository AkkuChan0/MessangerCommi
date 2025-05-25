const TaskInList = ({ task }) => {

    return (
        <div data-taskid={task.id} className="task">
            <div className="task-header">
                {task.tag && (
                    <a href="#" className="task-tag">{task.tag}</a>
                )}
                {task.title && (
                    <span className="task-name">{task.title}</span>
                )}
            </div>
            <div className="task-content">
                {task.status && (
                    <div className="task-info status">
                        <span className='display-name'>Статус:</span>
                        <span className="info">{task.status}</span>
                    </div>
                )}
                {task.order && (
                    <div className="task-info order">
                        <span className='display-name'>Order:</span>
                        <span className="info">{task.order}</span>
                    </div>
                )}
                {task.assignedTo && (
                    <div className="task-info assigned">
                        <span className='display-name'>Для:</span>
                        <span className="info">{task.assignedTo}</span>
                    </div>
                )}
            </div>
            {/* <div className="task-deadline">
                <span className="deadline-text">{new Date(task.deadline).toLocaleDateString()}</span>
            </div> */}
        </div>
    )
}

export default TaskInList;