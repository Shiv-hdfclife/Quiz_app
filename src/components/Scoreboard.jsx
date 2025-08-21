import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function ScoreCard() {
    const { score } = useContext(QuizContext)

    return (
        <div>
            {score}
        </div>
    )
}