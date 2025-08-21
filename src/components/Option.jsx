import { useContext } from "react"
import { QuizContext } from "../context/QuizContext"

export default function Option({ ans, option }) {
    let { selectdOpt, setSelectedOpt, score, setScore } = useContext(QuizContext);

    console.log("options:", option)
    function handleClick(id) {
        let selectedOption = option[id];
        setSelectedOpt(selectedOption)
        console.log("Before checking:", score);
        if (ans == selectedOption) {
            setScore(prev => prev + 1);
        }
        // console.log("After checking:", score);
        // console.log("The selected option:", selectedOption);
        // console.log("the Id:", id)
    }
    return (
        <div>
            {option.map((opt, index) => {
                return <button onClick={() => handleClick(index)} key={index} className="text-black p-4 bg-[#997999] m-2"> {opt}
                </button>
            })}
        </div>
    )
}