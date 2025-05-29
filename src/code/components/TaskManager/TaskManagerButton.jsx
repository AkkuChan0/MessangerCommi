import { useDispatch, useSelector } from "react-redux";
import { setSelectedChat } from '../../../store/features/selectedChatSlice';
import { useNavigate } from "react-router-dom";

const TaskManagerButton = () => {

    const navigate = useNavigate();
    const MANAGER_ID = -3;
    const dispatch = useDispatch();

    const _selectedChat = useSelector((state) => state.selectedChat.selectedChat);

    const selectManager = () => {
        navigate('/manager')
        dispatch(setSelectedChat(MANAGER_ID));
    }

    return (
        <div 
            onClick={selectManager}
            data-id={MANAGER_ID}
            className={MANAGER_ID === _selectedChat ? "left-button selected": "left-button" }
        > 
            <div className="icon task-manager_48x48"></div>
            <div className="info">
                <b>Менеджер задач</b>
                <span>Управляйте своими задачами</span>
            </div>
        </div>
    )
}

export default TaskManagerButton;