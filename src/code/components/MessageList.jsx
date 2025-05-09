import { useSelector, useDispatch } from 'react-redux';
import { fetchChatMessages } from '../../store/features/selectedChatSlice';
import { useEffect, useState } from "react";


const MessageList = () => {
    const dispatch = useDispatch();
    const { selectedChat, messages, loading: messagesLoading, error: messagesError } = useSelector(
        (state) => state.selectedChat
    );

    useEffect(() => {
        if (selectedChat) {
            dispatch(fetchChatMessages(selectedChat.id));
        }
    }, [dispatch, selectedChat]);
    console.log(selectedChat, messages)
    return (
        <div className="scroll-block">

        </div>
    )
}

export default MessageList;