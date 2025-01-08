import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>negative</button>
      <Statistics N_of_good={good} N_of_negative={bad} N_of_neutral={neutral} />

    </div>

  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
    <p>Good: {props.N_of_good}</p>
    <p>Neutral: {props.N_of_neutral}</p>
    <p>Negative: {props.N_of_negative}</p>
  </div>
  )
}

export default App