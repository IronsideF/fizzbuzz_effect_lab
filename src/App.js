import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [number, setNumber] = useState(1);
  const [output, setOutput] = useState('')
  
  const handleInc = () => {
    setNumber(number+1)
  };

  useEffect (() => {
    if (number % 3 === 0 && number % 5 === 0) {
      setOutput("fizzbuzz");
    } else if (number % 3 === 0) {
      setOutput("fizz");
    } else if (number % 5 === 0) {
      setOutput("buzz");
    } else {
      setOutput(number);
    }}, [number])
  

  return (
    <>
      <button value={number} onClick={handleInc}>+</button>
      <h2>Current Number: {number}</h2>
      <h2>Output: {output}</h2>
    </>
  );
}

export default App;
