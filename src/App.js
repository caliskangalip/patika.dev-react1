import React from 'react';
import './App.css';
import CounterRow from './components/CounterRow';

import Header from './components/Header';
import User from './components/User';

function App() {
  
  return (
    <div>
      <Header/>
      <User/>
      <CounterRow/>
    </div>
  );
}

export default App;
