import { createContext, useContext } from "react";

const UserContext = createContext({
    correct_answer_list : [],
    wrong_answer_list : [],
    skipped_question_list : [],
    finish_game: ()=>{},
    solve_question: (no,state)=>{}
})
export default UserContext;