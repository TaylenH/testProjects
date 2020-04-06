import React from 'react';
import './App.css';
import TestComponent from './Components/TestComponent';

function App() {
  return (
    <div className="App">
      <TestComponent testText="hello, world" />
      <TestComponent testText='test2' />
      <p>test</p>
    </div>
  );
}

export default App;
