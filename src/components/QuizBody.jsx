import { useContext, useEffect, useRef, useState } from "react";
import AnswerChoice from "./AnswerChoice";
import ProgressBar from "./ProgressBar";
import UserContext from "../context/UserContext";
import { quizList } from "../data";

export default function QuizBody(){
    const [questionNo,setQuestion] = useState(0)
    const currentQuiz = quizList[questionNo]
    const progressBarRef = useRef()
    const userContext = useContext(UserContext)
    const nextQuestion = ()=>{
        if (questionNo == quizList.length -1) {
            userContext.finish_game()
            return
        }
        setQuestion(prevState => prevState + 1)
    }
    const correctAnswer = ()=>{
        if (questionNo < quizList.length -1) {
            userContext.solve_question(questionNo + 1,"correct")
            nextQuestion()
        }
    }
    const wrongAnswer = ()=>{
        userContext.solve_question(questionNo + 1,"wrong")
        nextQuestion()
    }
    const skipQuestion = ()=>{
        userContext.solve_question(questionNo + 1,"skipped")
        nextQuestion()
    }
    const checkAnswer = (choice)=>{
        if(choice != null){
            if(choice == currentQuiz.answer){
                correctAnswer()
            }
            else{
                wrongAnswer()
            }
        }
        else{
            skipQuestion()
        }
    }
    useEffect(()=>{
        progressBarRef.current.max = 10000
        progressBarRef.current.value = 10000
        const interval = setInterval(()=>{
            progressBarRef.current.value -= 10
            if (progressBarRef.current.value <= 0) {
                checkAnswer(null)
            }
        },10)   
        if(questionNo == 0){
            console.log("QUESTION 0")
            clearInterval(interval)
        }
        return ()=>{
            clearInterval(interval)
        }
    },[questionNo])
    return(
        <div className="bg-[#34265e] grid mt-10 justify-items-center shadow-[0_15px_40px_-10px_rgba(0,0,0,0.9)]  content-start  w-[650px] h-auto rounded-lg p-10">
            <ProgressBar ref={progressBarRef}/>
            <p className="text-[#a182ff] text-lg font-sans font-semibol mt-5">{currentQuiz.question}</p>
            <ul className="mt-5 w-full">
                <AnswerChoice checkAnswer={checkAnswer}>{currentQuiz.choice1}</AnswerChoice>
                <AnswerChoice checkAnswer={checkAnswer}>{currentQuiz.choice2}</AnswerChoice>
                <AnswerChoice checkAnswer={checkAnswer}>{currentQuiz.choice3}</AnswerChoice>
                <AnswerChoice checkAnswer={checkAnswer}>{currentQuiz.choice4}</AnswerChoice>
            </ul>
        </div>
    )
}