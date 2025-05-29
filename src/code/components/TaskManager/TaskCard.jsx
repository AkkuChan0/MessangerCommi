const TaskCard = ({ task, setTask }) => {

    return (
        <div 
            data-taskid={task.id} 
            className="task"
            onClick={() => setTask(task)}
        >
            <div className="task-header">
                {task.tag && (
                    <a href="#" className="task-tag">{task.tag}-{task.id}</a>
                )}
                {task.title && (
                    <span className="task-name">{task.title}</span>
                )}
            </div>
            <div className="task-content">
                {task.description && (
                    <div className="task-description">
                        <span className="description-text">{task.description}</span>
                    </div>
                )}
                <div className="task-additional">
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
                            <span className="info">{task.assignedTo.firstName} {task.assignedTo.lastName}</span>
                        </div>
                    )}
                    {task.deadline && (
                        <div className="task-info deadline">
                            <span className='display-name'>Срок:</span>
                            <span className="info">{new Date(task.deadline).toLocaleDateString()}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TaskCard;