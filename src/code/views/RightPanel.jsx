import MessageList from '../components/MessageList';
import TaskManager from '../components/TaskManager';
import '../styles/right-panel.scss';
import { useSelector } from 'react-redux';

const RightPanel = (props) => {

    const { selectedChat, messages, loading: messagesLoading, error: messagesError } = useSelector(
        (state) => state.selectedChat
    );

    return (
        <div className="right-panel" style={{"width": String(window.innerWidth - props.width.selectBlockWidth) + "px" }}>
            {selectedChat >= 0 &&
                <>
                    <div className='in-chat-control'>
                        <div className='chat-info'>
                            <div className='name'>
                                <span>Собеседник</span>
                            </div>
                            <div className='status-info'>
                                <div className='status online'></div>
                                <span className='status-text'>В сети</span>
                            </div>
                        </div>
                        <div className='chat-buttons'>
                            <button className='icon-button call call_31x40'></button>
                            <button className='icon-button additionally additionally_32x4'></button>
                        </div>
                    </div>

                    <MessageList></MessageList>

                    <div className='write-message-block'>
                        <div className='content'>
                            <button className='icon-button attach-button attachments_34x34'></button>
                            <input placeholder='Сообщение..' />
                        </div>
                        <div className='buttons'>
                            <button className='icon-button smile smiles_34x34'></button>
                            <button className='icon-button send send_34x34'></button>
                        </div>
                    </div>
                </>
            }
            {selectedChat === -3 &&
                <TaskManager></TaskManager>
            }
        </div>
    )
}

export default RightPanel;