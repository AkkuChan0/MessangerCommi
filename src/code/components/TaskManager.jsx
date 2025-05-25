

const TaskManager = () => {

    return (
        <>
            <div className='in-chat-control'>
            </div>

            <div className="tasks-list">
                <div className="task">
                    <div className="task-header">
                        <a href="#" className="task-tag">Manager</a>
                        <span className="task-name">Название задачи</span>
                    </div>
                    <div className="task-content">
                        <div className="task-status">
                            <span className="status-text">Выполняется</span>
                        </div>
                        <div className="task-order">
                            <span className="order-text">10</span>
                        </div>
                        <div className="task-assigned">
                            <span className="assigned-text">Иванов И.</span>
                        </div>
                        <div className="task-deadline">
                            <span className="deadline-text">01.01.2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskManager;
