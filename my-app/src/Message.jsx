import './Message.css';

function Message({ message }) {
    return (
        <div className="Msg">
            <header className="Msg-header">
                {message}
            </header>
        </div>
    );
}

export default Message;