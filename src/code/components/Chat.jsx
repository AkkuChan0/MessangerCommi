import { useNavigate } from 'react-router-dom';
import { selectedChat, setSelectedChat, fetchChatMessages } from '../../store/features/selectedChatSlice';
import { useDispatch, useSelector } from 'react-redux';

function Chat(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectChat = () => {
        navigate('/')
        dispatch(fetchChatMessages(props.chat.id));
        dispatch(setSelectedChat(props.chat.id));
    }
    const _selectedChat = useSelector((state) => state.selectedChat.selectedChat);

    const _dateMessage = new Date(props.chat.lastMessageDate);
    const dateMessage = `${_dateMessage.getHours()}:${(_dateMessage.getMinutes() <= 9 ? '0' : '') + _dateMessage.getMinutes()}`

    return (
        <div 
            onClick={selectChat}
            data-chatid={props.chat.id}
            data-groupid={props.chat.groupId}
            className={props.chat.id === _selectedChat ? "chat-unit left-button selected": "chat-unit left-button" }
        >
            <div className="photo">
                <img></img>
            </div>
            <div className="info">
                <div className="up">
                    <b>{props.chat.name}</b>
                    <span className="date">{dateMessage}</span>
                </div>
                <span className="lastMessage">{props.chat.lastMessage}</span>
            </div>
        </div>
    )
}

export default Chat;