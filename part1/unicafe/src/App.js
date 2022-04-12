import { useState } from 'react'

const Header = (props) => {
  console.log()
  return (
    <div>
      <h1>
        give feedback
      </h1>
    </div>
  )
}
const Button = (props) => {
  console.log()
  return (
    <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}
const StatisticLine = (props) => {
  return (
    <div>
      <table>
        <tr>
        <td width="62px">{props.text}</td>
        <td>{props.value}</td>
      </tr>
      </table>
    </div>
  )
}
const Statistics = (props) => {
  if (props.total == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
        )
      }
    return (
      <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.total}/>
      <StatisticLine text="average" value={(props.good - props.bad)/(props.total)}/>
      <StatisticLine text="positive" value={(props.good/props.total * 100) + ' %'}/>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  return (
    <div>
      <Header/>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App