import { createContext, useState } from "react";
import HeaderPart from "./components/HeaderPart";
import QuizBody from "./components/QuizBody";
import ResultScreen from "./components/ResultScreen";
import UserContext from "./context/UserContext";



export default function App() {
    const [game_run,change_state] = useState(true)
    const [correct_answer_list,add_correct_list] = useState([])
    const [wrong_answer_list,add_wrong_answer_list] = useState([])
    const [skipped_question_list,add_skipped_list] = useState([])
    const solved_question = (question_no,state)=>{
        if (state == "correct") {
            add_correct_list((prevstate)=>{
                prevstate.push(question_no)
                return prevstate
            })
        }
        else if(state == "wrong"){
            add_wrong_answer_list((prevstate)=>{
                prevstate.push(question_no)
                return prevstate
            })
        }
        else{
            add_skipped_list((prevstate)=>{
                prevstate.push(question_no)
                return prevstate
            })
        }
    }
    const finish_game = ()=>{
        change_state(false)
    }

    return(
        <UserContext.Provider value={{
            correct_answer_list : correct_answer_list,
            wrong_answer_list : wrong_answer_list,
            skipped_question_list : skipped_question_list,
            finish_game: finish_game,
            solve_question: solved_question
        }
        }>
            <div className="w-screen h-screen" style={{backgroundColor:"#3b2f6e"}}>
                {game_run ? <div className="w-full 
                grid p-10 justify-items-center">
                    <HeaderPart></HeaderPart>
                    <QuizBody/>
                </div> :
                <>
                 <HeaderPart></HeaderPart>
                 <div className="w-full grid">
                 <ResultScreen></ResultScreen>
                 </div>
                 
                </>
                 }
            </div>
            
            
        </UserContext.Provider>
        
    )
}

