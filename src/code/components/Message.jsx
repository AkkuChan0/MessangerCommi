const Message = (props) => {
    const user = props.chatInfo.users.find(x => x.id == props.message.userId);

    let isYou = false;

    if (user.id == props.authUser.userId) isYou = true;

    const messageDate = new Date(props.message.date);

    const time = `${messageDate.getHours()}:${(messageDate.getMinutes() <= 9 ? '0' : '') + messageDate.getMinutes()}`

    return (
        <div className="message-block">
            {!isYou &&
                <div className="image">
                    <img></img>
                </div>
            }
            <div 
                className={isYou ? "message my-self" : "message"}
                >
                {!isYou && 
                    <div className="name">{user.firstName} {user.lastName}</div>
                }
                <div className="message-text">
                    <span>{props.message.text}</span>
                </div>
                <div className="date">
                    <span>{time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message;