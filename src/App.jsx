
import { useContext } from 'react'
import './App.css'
import Question from './components/Question.jsx'
import ScoreCard from './components/Scoreboard.jsx'
import { QuizContext } from './context/QuizContext.jsx'

function App() {
  let { currQuest, data } = useContext(QuizContext);
  console.log("The length of the data :", data.length)

  return (
    <>
      <div className='flex flex-col justify-center items-center mx-100 mt-50 py-20 rounded-lg  bg-[#c8b9b9]'>
        <h1 className='text-2xl '>Quiz App</h1>
        {currQuest <= data.length && <Question />}
        {currQuest > data.length && <ScoreCard />}

      </div>
    </>
  )
}

export default App
