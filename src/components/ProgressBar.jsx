import { forwardRef } from "react"
import './ProgressBar.css'

const ProgressBar = forwardRef((props,ref)=>{

    return(
       <progress id="progress" ref={ref} className="w-full"></progress>
    )
})

export default ProgressBar