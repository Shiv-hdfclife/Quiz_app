
import React, { createContext, useState } from "react";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
    const [currQuest, setCurrQuest] = useState(0);
    const [score, setScore] = useState(0);
    const [selectdOpt, setSelectedOpt] = useState("");


    const questions = [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid", "Rome"],
            answer: "Paris"
        },
        {
            id: 2,
            question: "Which language is used in React?",
            options: ["Python", "JavaScript", "C++", "Java"],
            answer: "JavaScript"
        }
    ]

    return (<QuizContext.Provider value={{ data: questions, currQuest, setCurrQuest, score, setScore, selectdOpt, setSelectedOpt }}>{children}</QuizContext.Provider>)
}

export { QuizProvider, QuizContext };