import { useEffect, useState } from "react";
import GroupChat from "./GroupChat";
import { useSelector, useDispatch } from 'react-redux';
import { fetchChatList } from "../../store/features/chatListSlice";
import Loading from "./Loading";

const ChatList = () => {
    const dispatch = useDispatch();
    const { chatList, loading, error } = useSelector((state) => state.chat);

    useEffect(() => {
        dispatch(fetchChatList());
    }, [dispatch]);

    return (
        <>
        {loading ? 
            (
                <Loading />
            ) : (
                <div className="chat-list">
                    {chatList?.chats?.length > 0 &&
                        <GroupChat groupId="0" chats={[...chatList?.chats].sort((a, b) => a.lastMessageDate < b.lastMessageDate)}></GroupChat>
                    }
                    <>  
                    {chatList?.groups?.map(group => (
                        <GroupChat
                            key={group.id}
                            id={group.id}
                            name={group.name}
                            chats={[...chatList?.chats.filter(x => x.groupId == group.id)].sort((a, b) => a.lastMessageDate < b.lastMessageDate)}
                        ></GroupChat>
                    ))
                    }
                    </>  
                </div>
            )
        }
        </>
    )
}

export default ChatList;