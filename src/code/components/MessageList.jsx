import { useSelector, useDispatch } from 'react-redux';
import { fetchAuth } from '../../store/features/userInfoSlice';
import { useEffect, useState } from "react";
import Message from './Message';


const MessageList = () => {
    const { selectedChat, messages, loading: messagesLoading, error: messagesError } = useSelector(
        (state) => state.selectedChat
    );

    const { authUser, loading, error } = useSelector((state) => state.authUser);

    return (
        <div className="scroll-block">
            {messages?.messages?.length > 0 &&
                <>
                {messages.messages.map(message => (
                    <Message 
                        key={message.id}
                        message={message}
                        chatInfo={messages.chatInfo}
                        authUser={authUser}
                    ></Message>
                ))

                }
                </>
            }

        </div>
    )
}

export default MessageList;