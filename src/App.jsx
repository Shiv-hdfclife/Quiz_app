
import './App.css'
import Question from './components/Question.jsx'
import ScoreCard from './components/Scoreboard.jsx'

function App() {

  return (
    <>
      <div>
        <h1 className='text-2xl '>Quiz App</h1>
        <Question />
        <ScoreCard />
      </div>
    </>
  )
}

export default App
