import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [input, setInput] = useState('');
  console.log(input);
  
  return (
    <div className="App">
      <h1>Facebook Messenger Clone Coy</h1>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button>Send Messege</button>
    </div>
  );
}

export default App;
