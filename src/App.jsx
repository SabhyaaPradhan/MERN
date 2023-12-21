import React, { useState } from "react"

const Statistics = (props) => (
  <div>
    <h1>Statistics</h1>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const feedbackGiven = good + bad + neutral > 0

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      {(() => {
        if (feedbackGiven) {
          return (
            <Statistics good={good} neutral={neutral} bad={bad} />)  
        } else {
          return <h1>No Feedback Given</h1>
        }
      })()}
    </div>
  )
}

export default App
