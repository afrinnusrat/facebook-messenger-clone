import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  // console.log(input);
  // console.log(message);

  useEffect(() => {
    // run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  // useEffect, run code on a condition in REACT
  useEffect(() => {
    // run code here...
    // if its blank inside [] depedencies, this code runs ONCE whene the app component loads
    // const name = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'));
  }, [])  // disini kondisinya apa dulu
  console.log(username);

  const sendMessage = (event) => {
    // all the logic to send 
    event.preventDefault();   // supaya ga ngerefres page nya ketika submit si input tag

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }
  
  return (
    <div className="App">
      <h1>Facebook Messenger Clone Coy</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Messege</Button>
        </FormControl>
      </form>

      {/* Message themselves */}
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
