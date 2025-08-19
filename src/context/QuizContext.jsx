
import React, { createContext } from "react";

const QuizContext = createContext();



const QuizProvider = ({ children }) => {

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

    return (<QuizContext.Provider value={{ data: questions }}>{children}</QuizContext.Provider>)
}

export { QuizProvider, QuizContext };