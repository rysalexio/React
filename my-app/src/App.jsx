import { useState,useRef} from 'react';
import './App.css';
//import Inputs from './Inputs';
import Message from './Message';
import MessageList from './MessageList';
//import RoboBot from './RoboBot'

const title = "First React Project"

function App() {
  const [messageList, setMessageList]=useState([]);
  const ChangeMessageList = ()=>setMessageList([...messageList,{name:`${name.current.value}`,text:`${text.current.value}`}])
  const name= useRef('')
  const text= useRef('')
  
  return (
    <div className="App">
      <header className="App-header">
      <Message title={title} />
      <br />  
      <input ref={name} placeholder="Ваше имя" />
      <br />
      <input ref={text} placeholder="Введите текст"/>
      <br />
      <button onClick={ChangeMessageList}>Send Message</button>
      <br />
      <MessageList messageList={messageList}/>
      </header>
    </div>
  );
}

export default App;
