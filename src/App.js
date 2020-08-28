import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  // console.log(input);

  const sendMessage = (event) => {
    // all the logic to send
    setMessage([...message, input]);
    setInput('');
  }
  console.log(message);
  
  return (
    <div className="App">
      <h1>Facebook Messenger Clone Coy</h1>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Messege</button>
    </div>
  );
}

export default App;
