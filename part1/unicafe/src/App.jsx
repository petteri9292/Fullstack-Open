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

const Statistics = ({N_of_good, N_of_neutral, N_of_negative}) => {
  const total = N_of_good + N_of_neutral + N_of_negative
  const positive_percent = N_of_good/total * 100
  return (
    <div>
      <h1>Statistics</h1>
    <p>Good: {N_of_good}</p>
    <p>Neutral: {N_of_neutral}</p>
    <p>Negative: {N_of_negative}</p>
    <p>all: {total}</p>
    <p>average: {(N_of_good-N_of_negative)/total}</p>
    <p>positive: {positive_percent} %</p>
  </div>
  )
}

export default App