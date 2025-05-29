import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../../store/features/taskSlice';
import TaskCard from './TaskCard';
import TaskInList from './TaskInList';
import Loading from '../Loading';
import TaskFilterItem from './TaskFilterItem';
import { Routes, Route } from "react-router-dom";
import CreateTask from './createTask';
import { useNavigate } from 'react-router-dom';

import '../../styles/task-manager.scss';
import '../../../icons.css';
import Task from './Task';

const TaskManager = () => {

    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector((state) => state.tasks);

    const navigate = useNavigate();
    const [task, setTask] = useState(null);

    useEffect(() => {
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
                        <div 
                            className='logo-block'
                            onClick={() => setTask(null)}
                        >
                            <div className='logo icon'></div>
                            <div className='logo-text'>Команда</div>
                        </div>
                        <div className='in-task-control-left-buttons'>
                            <a href="#" className='tasks'>Задачи</a>
                            <a href="#">Мониторинг</a>
                            <a href="#">Отчеты</a>
                            <a href="#" onClick={() => { navigate('/createTask') }} className='create-task'>Новая задача</a>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/manager" element={
                            <>
                                {task ? (
                                    <Task task={task}></Task>
                                ) : (
                                    <div className='task-manager'>
                                        <div className='tasks-header'>
                                            <h2>Ваши важные задачи</h2>
                                        </div>
                                        <div className='tasks-grid order'>
                                            {tasks?.length > 0 ? (
                                                sortedTasks.map(task => (
                                                    <TaskCard 
                                                        key={task.id} 
                                                        task={task}
                                                        setTask={setTask}
                                                    ></TaskCard>
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
                                            <div className="tasks-list">
                                                {tasks?.length > 0 ? (
                                                    tasks.map(task => (
                                                        <TaskInList 
                                                            key={task.id} 
                                                            task={task}
                                                            setTask={setTask}
                                                        ></TaskInList>
                                                    ))
                                                ) : (
                                                    <p>Задачи не найдены</p>
                                                )

                                                }
                                            </div>

                                            <div className='tasks-filter'>
                                                <h3>Фильтрация</h3>

                                                <TaskFilterItem name="project" displayName="Проект" items={[{id: 1, displayName: 'Менеджер задач'}, {id: 2, displayName: 'Мессенджер'}]}></TaskFilterItem>
                                                <TaskFilterItem name="project" displayName="Статус" items={[{id: 1, displayName: 'todo'}, {id: 2, displayName: 'in-progress'}, {id: 3, displayName: 'ready for test'}, {id: 4, displayName: 'new'}]}></TaskFilterItem>
                                                <TaskFilterItem name="project" displayName="Для" items={[{id: 1, displayName: 'Анна Кузнецова'}, {id: 2, displayName: 'Иван Иванов'}, {id: 3, displayName: 'Петр Петров'}, {id: 4, displayName: 'Мария Смирнова'}]}></TaskFilterItem>
                                                <TaskFilterItem name="project" displayName="Срок" items={[{id: 1, displayName: 'Сегодня'}, {id: 2, displayName: 'Завтра'}, {id: 3, displayName: 'На этой неделе'}, {id: 4, displayName: 'На следующей неделе'}]}></TaskFilterItem>
                                                <TaskFilterItem name="project" displayName="Теги" items={[{id: 1, displayName: 'urgent'}, {id: 2, displayName: 'important'}, {id: 3, displayName: 'low-priority'}, {id: 4, displayName: 'high-priority'}]}></TaskFilterItem>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        }></Route>
                        <Route path="/createTask" element={<CreateTask></CreateTask>} />
                    </Routes>
                </>
            )}
        </>
    )
}

export default TaskManager;
