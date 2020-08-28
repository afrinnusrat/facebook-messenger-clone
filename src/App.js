import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Hai', 'Mantap']);
  // console.log(input);
  // console.log(message);

  const sendMessage = (event) => {
    // all the logic to send
    setMessages([...messages, input]);
    setInput('');
  }
  
  return (
    <div className="App">
      <h1>Facebook Messenger Clone Coy</h1>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Messege</button>

      {/* Message themselves */}

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
