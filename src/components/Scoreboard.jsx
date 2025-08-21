import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function ScoreCard() {
    const { score } = useContext(QuizContext)

    return (
        <div>
            <h1>Your score is {score} !!!!  {score == 2 && <><h1>Hurray Congratulations You topped the test !</h1></>}</h1>
        </div>
    )
}