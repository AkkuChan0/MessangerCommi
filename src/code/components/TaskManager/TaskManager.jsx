import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../../store/features/taskSlice';
import TaskCard from './TaskCard';
import TaskInList from './TaskInList';
import Loading from '../Loading';
import TaskFilterItem from './TaskFilterItem';

import '../../styles/task-manager.scss';

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
                    <div className='in-task-control'>
                        <div className='logo-block'>
                            <div className='logo icon'></div>
                            <div className='logo-text'>Команда</div>
                        </div>
                        <div className='in-task-control-left-buttons'>
                            <a href="#" className='tasks'>Задачи</a>
                            <a href="#">Мониторинг</a>
                        </div>
                    </div>
                    <div className='task-manager'>
                        <div className='tasks-header'>
                            <h2>Ваши важные задачи</h2>
                        </div>
                        <div className='tasks-grid order'>
                            {tasks?.length > 0 ? (
                                sortedTasks.map(task => (
                                    <TaskCard key={task.id} task={task}></TaskCard>
                                ))
                            ) : (
                                <p>Задачи не найдены</p>
                            )

                            }
                        </div>

                        <div className='tasks-header'>
                            <h2>Все задачи</h2>
                        </div>

                        <div className='tasks-main-block'>
                            <div className='tasks-filter'>
                                <h3>Фильтрация</h3>

                                <TaskFilterItem name="project" displayName="Проект" items={[{id: 1, name: 'manager', displayName: 'Менеджер задач'}, {id: 2, name: 'messanger', displayName: 'Мессенджер'}]}></TaskFilterItem>
                                <TaskFilterItem name="project" displayName="Проект" items={[{id: 1, name: 'manager', displayName: 'Менеджер задач'}, {id: 2, name: 'messanger', displayName: 'Мессенджер'}]}></TaskFilterItem>

                            </div>

                            <div className="tasks-list">
                                {tasks?.length > 0 ? (
                                    tasks.map(task => (
                                        <TaskInList key={task.id} task={task}></TaskInList>
                                    ))
                                ) : (
                                    <p>Задачи не найдены</p>
                                )

                                }
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default TaskManager;
