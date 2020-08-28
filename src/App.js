import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Hai', 'Mantap']);
  // console.log(input);
  // console.log(message);

  const sendMessage = (event) => {
    // all the logic to send 
    event.preventDefault();   // supaya ga ngerefres page nya ketika submit si input tag
    setMessages([...messages, input]);
    setInput('');
  }
  
  return (
    <div className="App">
      <h1>Facebook Messenger Clone Coy</h1>

      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <Button variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Messege</Button>
      </form>

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
