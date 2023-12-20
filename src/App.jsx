import React, { useState } from "react";

const Statistics = (props) => (
  <div>
    <h1>Statistics</h1>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
  </div>
)

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood('6')}>Good</button>
      <button onClick={() => setNeutral('4')}>Neutral</button>
      <button onClick={() => setBad('1')}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
