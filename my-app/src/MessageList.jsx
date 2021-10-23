import { v4 as uuidv4 } from 'uuid';
import "./MessageList.css";

const MessageList = ({messageList})=>{

    return (
        <div className="MessageList"> 
        {messageList.map(({name,text})=>
            <div key={uuidv4()}>{name}: {text}</div>
        )}
        </div>
    );
};

export default MessageList