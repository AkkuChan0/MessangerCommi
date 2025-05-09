import Chat from "./Chat"
import { useRef } from "react"

const GroupChat = (props) => {
    let groupInfo = {
        id: props?.id,
        name: props?.name
    }

    if (props?.groupId === "0") {
        groupInfo = {
            id: 0,
            name: "Последнее"
        }
    }

    const groupElement = useRef();

    const collapseGroup = () => {
        groupElement.current.querySelector('.collapse-button').classList.toggle("closed");
        groupElement.current.querySelector('.chats-in-group').classList.toggle("closed");
    }
    return (
        <div 
            className="group" 
            data-gid={groupInfo.id}
            ref={groupElement}
        > 
            <div 
                onClick={collapseGroup}
                className="collapse-button"
            >
                <span>{groupInfo.name}</span>
            </div>
            <div className="chats-in-group">
                {props?.chats.map(chat => (
                    <Chat
                        key={String(chat.id)}
                        chat={chat}
                    ></Chat>
                ))

                }
            </div>
        </div>
    )
}

export default GroupChat;