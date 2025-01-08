import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"Good"}></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"Neutral"}></Button>
      <Button handleClick={() => setBad(bad + 1)} text={"Negative"}></Button>
    
      <Statistics N_of_good={good} N_of_negative={bad} N_of_neutral={neutral} />

    </div>

  )
}

const Statistics = ({N_of_good, N_of_neutral, N_of_negative}) => {
  const total = N_of_good + N_of_neutral + N_of_negative
  const positive_percent = N_of_good/total * 100
  if (total == 0){
    return (
      <div>
          <h1>Statistics</h1>
          <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>

    <h1>Statistics</h1>

    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{N_of_good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{N_of_neutral}</td>
        </tr>
        <tr>
          <td>Negative</td>
          <td>{N_of_negative}</td>
        </tr>
        <tr>
          <td>All</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{(N_of_good-N_of_negative)/total}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{positive_percent + " %"}</td>
        </tr>

      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )
}


export default App