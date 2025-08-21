
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Option from "./Option";

export default function Question() {
    const { data } = useContext(QuizContext)

    console.log("data", data)
    return (
        <div>
            The Questions List is here
            <div className="text-black">
                <ul>
                    {data.map(q => {
                        return <li key={q.id}> {q.question}
                            {<Option ans={q.answer} option={q.options} />
                            }
                            {}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}