import './Message.css';

function Message({ title }) {
    return (
        <div className="Msg">
            <header className="Msg-header">
                {title}
            </header>
        </div>
    );
}

export default Message;