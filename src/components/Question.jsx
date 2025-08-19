
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function Question() {
    const { data } = useContext(QuizContext)

    console.log("data", data)
    return (
        <div>
            The Questions List is here
            <div>
                {/* {data} */}
            </div>
        </div>
    )



}