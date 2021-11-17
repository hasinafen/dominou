import react, { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import Score from "./Score"


const AjouterScore =(props)=>{

    const [nombre , setNombre]=useState(0)
    const handleArray =(e)=>{
        setNombre(e.target.value)
    }
    
    
    return(
        <div>
            <div className="joint-1">
                <h5 className="quiter">Scored</h5>
                <input src="text" className="place" value={nombre} onChange={handleArray}></input>
                <button className="times"><i className="fa fa-times" ></i></button>
                <button className="details" onClick={() => props.onSubmit(nombre)}><i className="fa fa-check"></i> ajouter score</button>
            </div> 
        </div>
    )

}
export default AjouterScore