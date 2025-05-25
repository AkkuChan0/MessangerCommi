import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../../store/features/taskSlice';
import TaskCard from './TaskCard';
import TaskInList from './TaskInList';
import Loading from '../Loading';

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
        
            {loading ? 
            (
                <Loading />
            ) : (
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
                                    <TaskCard task={task}></TaskCard>
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
                                    <TaskInList task={task}></TaskInList>
                                ))
                            ) : (
                                <p>Задачи не найдены</p>
                            )

                            }
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default TaskManager;
