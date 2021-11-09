import { useState } from "react"
import AjouterScore from "./AjouterScore"

    const ButtonScore =(props)=>{
    const[isOut, setIsOut] = useState(false)
   
   
    const onClick=()=>{
        if (isOut === false){
            setIsOut(true)
        }else{
            setIsOut(false)
        }
    }
  
  
        return(
            <div>
                <button className="ajouter-1" onClick={onClick}><i className="fa fa-plus"></i> ajouter score</button>
                {
                    isOut === true  && <AjouterScore />
                }
            </div>
        )
    }
    export default ButtonScore