export default function AnswerChoice({checkAnswer,children}){
    const answer = children
    return(
        <li className="w-full hover:bg-[#7e45c4] hover:text-[white] rounded-2xl mb-3 py-3 grid justify-items-center bg-sky-500 content-center" onClick={()=>{checkAnswer(answer)}}>
            <p>{answer}</p>
        </li>
    )
}