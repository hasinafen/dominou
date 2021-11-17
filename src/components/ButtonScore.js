import { useState } from "react"


    const ButtonScore =(props)=>{
   
  
        return(
            <div>
                <button className="ajouter-1" onClick={props.onClickButton}><i className="fa fa-plus"></i> ajouter </button>
            </div>
        )
    }
    export default ButtonScore