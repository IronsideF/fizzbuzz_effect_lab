import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [number, setNumber] = useState(1);
  const [output, setOutput] = useState('');
  const [day, setDay] = useState(10);
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [timer, setTimer] = useState(15)

  const handleInc = () => {
    setNumber(number+1)
    setInput('')
    setTimer(15)
    setInterval(() => {if(timer>0){setTimer(timer-1)}}, 1000)
  };

  const handleDay = () => {
    setDay(day+1)
  };

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  // const handleTimer = () => {
  //   if (timer>0){
  //     console.log('Timer Going Down!')
  //     setTimer(timer-1)}
  //   }
  


  

  useEffect(() => {
    if (input.toLowerCase() === output.toString()) {
      setAnswer('Correct!')
    } else {
      setAnswer('Wrong!')
    }
  }, [input, output])

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
      <input type="text" value={input} onChange={handleInput} />
      <h2>{timer}</h2>
      <h2>{answer}</h2>
      <h2>Date: {day}</h2>
      <button value={day} onClick={handleDay}>Add to the Day</button>
    </>
  );
}

export default App;
