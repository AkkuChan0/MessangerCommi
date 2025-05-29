const Task = ({task}) => {
    console.log(task)
    return (
        <>
            <div className="task-page">
                <div className="task-main">
                    <div className="task-left">
                        <div className="task-header">
                            {task.tag && (
                                <a href="#" className="task-tag">{task.tag}-{task.id}</a>
                            )}
                            {task.title && (
                                <span className="task-name">{task.title}</span>
                            )}
                        </div>
                        
                        <span className="task-additionally">Создал: {task.createdUser?.firstName} {task.createdUser?.lastName} | {new Date(task.createdAt).toLocaleDateString()}</span>
                        {task.description && (
                            <div className="task-description">
                                <span className="description-text">{task.description}</span>
                            </div>
                        )}
                    </div>
                    <div className="task-right">
                        <table className="task-info-table">
                            <tbody>
                                <tr className="task-info status">
                                    <td>
                                        <span className='display-name'>Статус:</span>
                                    </td>
                                    <td className="info">
                                        <a>{task.status}</a>
                                    </td>
                                </tr>
                                <tr className="task-info order">
                                    <td>
                                        <span className='display-name'>Order:</span>
                                    </td>
                                    <td className="info">
                                        <a>{task.order}</a>
                                    </td>
                                </tr>
                                <tr className="task-info assigned">
                                    <td>
                                        <span className='display-name'>Для:</span>
                                    </td>
                                    <td className="info">
                                        <a>{task.assignedTo.firstName} {task.assignedTo.lastName}</a>
                                    </td>
                                </tr>
                                <tr className="task-info deadline">
                                    <td>
                                        <span className='display-name'>До:</span>
                                    </td>
                                    <td className="info">
                                        <a>{new Date(task.deadline).toLocaleDateString()}</a>
                                    </td>
                                </tr>
                                <tr className="task-info created"> 
                                    <td>
                                        <span className='display-name'>Создано:</span>
                                    </td>
                                    <td className="info">
                                        <a>{new Date(task.createdAt).toLocaleDateString()}</a>
                                    </td>
                                </tr>
                                <tr className="task-info updated">
                                    <td>
                                        <span className='display-name'>Обновлено:</span>
                                    </td>
                                    <td className="info">
                                        <a>{new Date(task.updatedAt).toLocaleDateString()}</a>
                                    </td>  
                                </tr>
                                <tr className="task-info project">
                                    <td>
                                        <span className='display-name'>Проект:</span>
                                    </td>
                                    <td className="info">
                                        <a>{task.project}</a>
                                    </td>
                                </tr>
                                <tr className="task-info priority">
                                    <td>
                                        <span className='display-name'>Приоритет:</span>
                                    </td>
                                    <td className="info">
                                        <a>{task.priority}</a>
                                    </td>
                                </tr>
                                {/* <tr className="task-info tags">
                                    <td>
                                        <span className='display-name'>Теги:</span>
                                    </td>
                                    <td className="info">
                                        <span>{task.tags?.join(', ') || 'Нет тегов'}</span>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr></hr>
                {task.isIdea && (
                    <>
                        <div className="task-idea">
                            <span>Подсказка ИИ</span>
                            <span className="idea-text">
                                {task.idea}
                            </span>
                        </div>
                        <hr></hr>
                    </>
                )}

                <div className="task-comments">
                    <h3>Комментарии</h3>
                    <div className="comments-list">
                        {task.comments && task.comments.length > 0 ? (
                            task.comments.map(comment => (
                                <div key={comment.id} className="comment">
                                    <span className="comment-author">{comment.author.firstName} {comment.author.lastName}</span>
                                    <span className="comment-date">{new Date(comment.createdAt).toLocaleDateString()}</span>
                                    <p className="comment-text">{comment.text}</p>
                                </div>
                            ))
                        ) : (
                            <p>Комментариев нет</p>
                        )}
                    </div>

                    <div className="comment-form">
                        <form>
                            <textarea placeholder="Ваш комментарий" rows="4"></textarea>
                            <div className="comment-form-actions">
                                <button className="icon-button attachments_34x34"></button>
                                <button type="submit" className="icon-button send_34x34"></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task;