import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';

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
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Messege</Button>
        </FormControl>
      </form>

      {/* Message themselves */}

      {
        messages.map(message => (
          <>
            <Message text={message} />
          </>
        ))
      }

    </div>
  );
}

export default App;
