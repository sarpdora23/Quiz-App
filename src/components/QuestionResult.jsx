export default function QuestionResult({question,result}){
    console.log("QUESTION: " + question)
    const style = {"color":"black"}
    if (result == "correct") {
        style.color = "green"
    }
    else if(result == "wrong"){
        style.color = "red"
    }
    return(
        <div className="grid w-full  my-5">
            <p className="justify-self-center text-center size-[24px] bg-[black] rounded-full  text-[white]">{question.no}</p>
            <div className="grid w-full">
                <p className="justify-self-center text-center">{question.question}</p>
                <p className={"justify-self-center text-center"+` text-[${style.color}]`}>{question.answer}</p>
            </div>
        </div>
    )
}