import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../store/features/taskSlice';

const TaskManager = () => {

    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector((state) => state.tasks);

    useEffect(() => {
            console.log('Fetching tasks...');
            dispatch(fetchTasks());
    }, [dispatch]);
    
    const sortedTasks = [...tasks].sort((a, b) => a.order - b.order).slice(0, 6);
    
    return (
        <>
            <div className='in-chat-control'>
            </div>
            <div className='task-manager'>
                <div className='tasks-header'>
                    <h2>Ваши важные задачи</h2>
                </div>
                <div className='tasks-grid order'>
                    {tasks?.length > 0 ? (
                        sortedTasks.map(task => (
                            <div key={task.id} className="task">
                                <div className="task-header">
                                    {task.tag && (
                                        <a href="#" className="task-tag">{task.tag}</a>
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
                                                <span className="info">{task.assignedTo}</span>
                                            </div>
                                        )}
                                    </div>
                                    {/* <div className="task-deadline">
                                        <span className="deadline-text">{new Date(task.deadline).toLocaleDateString()}</span>
                                    </div> */}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Задачи не найдены</p>
                    )

                    }
                </div>

                <div className='tasks-header'>
                    <h2>Все задачи</h2>
                </div>

                <div className="tasks-list">
                    {tasks?.length > 0 ? (
                        tasks.map(task => (
                            <div key={task.id} className="task">
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
                        ))
                    ) : (
                        <p>Задачи не найдены</p>
                    )

                    }
                </div>
            </div>
        </>
    )
}

export default TaskManager;
