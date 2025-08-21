
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Option from "./Option";

export default function Question() {
    const { data, currQuest, setCurrQuest, } = useContext(QuizContext);
    console.log("The curetn page :", currQuest)

    console.log("data", data)
    return (
        <div>
            <h1 className="font-semibold text-center">

                The Questions List is here
            </h1>
            <div className=" mt-10">
                <ul>
                    {data.map(q => {
                        return <li key={q.id}> {currQuest == q.id && q.question}
                            {currQuest == q.id && <Option ans={q.answer} option={q.options} />}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}