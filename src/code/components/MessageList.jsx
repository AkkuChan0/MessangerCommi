import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect, useState } from "react";
import Message from './Message';
import Loading from './Loading';
import { fetchAi } from '../../store/features/aiIdeaSlice';
import { useNavigate } from 'react-router-dom';
import { selectedChat, setSelectedChat, fetchChatMessages } from '../../store/features/selectedChatSlice';

const MessageList = () => {
    const { selectedChat, messages, loading: messagesLoading, error: messagesError } = useSelector(
        (state) => state.selectedChat
    );

    const { authUser, _loading, error } = useSelector((state) => state.authUser);

    const dispatch = useDispatch();
    const { idea, _aiLoading, aiError } = useSelector((state) => state.aiIdea);
    const { openIdea, setOpenIdea } = useState(true);

    
    useEffect(() => {
        dispatch(fetchAi());
    }, [dispatch]);

    const scrollRef = useRef();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const navigate = useNavigate();

    const openCreateTask = () => {
        dispatch(setSelectedChat(-3));
        navigate('/createTask', { task: idea });
    }
    
    return (
        <>
            {messagesLoading ? 
                (
                    <Loading />
                ) : (
                    <div className="scroll-block" ref={scrollRef}>
                        {messages?.messages?.length > 0 &&
                            <>
                            {messages.messages.map(message => (
                                    <Message 
                                        key={message.id}
                                        message={message}
                                        chatInfo={messages.chatInfo}
                                        authUser={authUser}
                                    ></Message>
                                )
                            )}
                            </>
                        }
                        <div 
                            className={idea?.is_task_possible && idea?.chatId == selectedChat ? ' ai-idea active' : 'ai-idea'}
                            onClick={openCreateTask}
                        >
                            <div className='icon ai-idea-icon'></div>
                            <div className="idea">
                                <div className="idea-header">
                                    <span>У ИИ есть идея для новой задачи</span>
                                </div>
                                <div className="idea-text">
                                    <span>Давайте её создадим!</span>
                                </div>
                            </div>
                            <div 
                                className='icon exit-icon'
                                onClick={() => { setOpenIdea(false) }}
                            ></div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MessageList;