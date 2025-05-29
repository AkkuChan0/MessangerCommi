import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchAi } from '../../../store/features/aiIdeaSlice';
import { useNavigate } from 'react-router-dom';

const CreateTask = (task) => {
    const dispatch = useDispatch();
    const { idea, _aiLoading, aiError } = useSelector((state) => state.aiIdea);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAi());
    }, [dispatch]);

    return (
        <>
            <div className="create-task-page">
                <div className="task-main">
                    <div className="task-left">
                        <div className="task-header">
                            <span>Название задачи</span>
                            <input className="task-name" value={idea.task_name} />
                        </div>
                        
                        <div className="task-description">
                            <span>Описание</span>
                            <textarea className="description-text" defaultValue={idea.task_description}></textarea>
                            <div className="comment-form-actions">
                                <button className="icon-button attachments_34x34"></button>
                            </div>
                        </div>

                        {/* <div className="task-idea">
                            <span>Подсказка ИИ</span>
                            <span className="idea-text">
                                {idea.ai_idea}
                            </span>
                        </div> */}
                    </div>
                    <div className="task-right">
                        <table className="task-info-table">
                            <tbody>
                                <tr className="task-info status">
                                    <td>
                                        <span className='display-name'>Статус:</span>
                                    </td>
                                    <td className="info">
                                        <a>Новое</a>
                                    </td>
                                </tr>
                                <tr className="task-info order">
                                    <td>
                                        <span className='display-name'>Order:</span>
                                    </td>
                                    <td className="info">
                                        <input type='number'></input>
                                    </td>
                                </tr>
                                <tr className="task-info assigned">
                                    <td>
                                        <span className='display-name'>Для:</span>
                                    </td>
                                    <td className="info">
                                        <a>Выбрать</a>
                                    </td>
                                </tr>
                                <tr className="task-info deadline">
                                    <td>
                                        <span className='display-name'>До:</span>
                                    </td>
                                    <td className="info">
                                        <input type='date'></input>
                                    </td>
                                </tr>
                                <tr className="task-info project">
                                    <td>
                                        <span className='display-name'>Проект:</span>
                                    </td>
                                    <td className="info">
                                        <a>Выбрать</a>
                                    </td>
                                </tr>
                                <tr className="task-info priority">
                                    <td>
                                        <span className='display-name'>Приоритет:</span>
                                    </td>
                                    <td className="info">
                                        <a>Выбрать</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="task-footer">
                    <button className="save-task-button">Создать</button>
                    <button className="cancel-task-button" onClick={() => { navigate('/') }}>Отмена</button>
                </div>
            </div>
        </>
    )
}

export default CreateTask;