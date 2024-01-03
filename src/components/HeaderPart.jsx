import headerImage from "../assets/quiz-logo.png"
export default function HeaderPart(){
    return(
        <div className="grid justify-items-center">
            <img src={headerImage} className="w-12 h-auto"></img>
            <h1 className="text-2xl font-bold text-[#9524d6] tracking-[.35em]">REACTQUIZ</h1>
        </div>
    )
}