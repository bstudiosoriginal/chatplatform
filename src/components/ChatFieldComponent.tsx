

const ChatFieldComponent = () => {
    return (
        <div className="chatfieldcontainer">
            <input className="chatfield" placeholder="Type a message..." name="message input">
            </input>
            <button className="sendbutton" aria-label="send message">
                {/* <img src="" alt="send"/> */}
            </button>
        </div>
    )
}

export default ChatFieldComponent;