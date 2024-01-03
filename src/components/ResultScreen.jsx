import { useContext } from "react";
import QuestionResult from "./QuestionResult";
import UserContext from "../context/UserContext";
import { quizList } from "../data";
import quizCompleted from "../assets/quiz-complete.png"

export default function ResultScreen(){
    const userContext = useContext(UserContext)
    const question_list = quizList
    return(
        <div className="size-auto h-[700px] mt-10 w-1/3 justify-self-center bg-[#a05de3] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.9)] px-2 py-5 rounded-xl">
            <div className="h-full overflow-y-auto grid px-3">
                <img src={quizCompleted} className="w-[86px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.45)] mb-5 border border-[1px] border-[black] rounded-full px-4 justify-self-center py-3"></img>
                <h2 className="text-5xl font-bold text-center">QUIZ COMPLETED!</h2>
                <div className="mt-6 flex justify-center">
                    <div className="w-1/3">
                        <p className="text-center text-4xl text-[#3a1a59]">{(userContext.skipped_question_list.length / 10) * 100}%</p>
                        <p className="text-center text-lg text-[#3a1a59] font-bold">SKIPPED</p>
                    </div>
                    <div className="w-1/3">
                        <p className="text-center text-4xl text-[#3a1a59]">{(userContext.correct_answer_list.length / 10) * 100}%</p>
                        <p className="text-center text-lg text-[#3a1a59] font-bold">ANSWERED 
                        CORRECTLY</p>
                    </div>
                    <div className="w-1/3">
                        <p className="text-center text-4xl text-[#3a1a59]">{(userContext.wrong_answer_list.length / 10) * 100}%</p>
                        <p className="text-center text-lg text-[#3a1a59] font-bold">ANSWERED
                        INCORRECTLY</p>
                    </div>
                </div>
                <hr className="w-2/3 h-1 mx-auto border-0 my-8 bg-[#3a1a59]"></hr>
            {question_list.map((question_no)=>{
                let result
                if (userContext.correct_answer_list.includes(question_no.no)) {
                    result = "correct"
                }
                else if (userContext.wrong_answer_list.includes(question_no.no)) {
                    result = "wrong"
                }
                else{
                    result = "skipped"
                }
                
                return(
                    <QuestionResult question={question_no} result={result}/>
                )
            })}
            
            </div>
            
            
        </div>
    )
}