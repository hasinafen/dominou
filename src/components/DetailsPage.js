import { useState } from 'react/cjs/react.development';
import'./details-page.css';
const DetailsPage =(props)=>{
  console.log(props)
 const [textTojo, setTextTojo]=useState('')
 const [textPapi, setTextPapi]=useState('')
 const [textNanty, setTextNanty]=useState('')
 const handleTextChange =(e)=>{
   console.log(e)
   setTextTojo(e.target.value)
 }
    return(
      <div className="vuec_container">
        <div className="menu">
            <button className="home" onClick={props.onClickD}><i className="fa fa-home"></i></button>
            <button className="circle" onClick={props.onClickButtonAdd}><i className="fa fa-info-circle"></i></button>      
        </div> 
        <div className="title">
            <div className="top">
              <div className="pen">
                <h2 className="h2">Partie de 3 joueur <button className="button-1"><i className="fa fa-pen"></i></button></h2>
              </div>
              <div className="jone">
                

              </div>
              <div className="score">
                <div className="flex">
                  <h3 className="tojo" value={textTojo} onChange={handleTextChange} >{props.joueur1}</h3>
                  <h4 className="start"><i className="fa fa-star"></i></h4>
                </div>
                <div className="display">
                <ul className="li">

                  <li>10</li>
                  <li>5</li>
                  <li>30</li>
                </ul>
                <h5 className="total">Total:</h5>
                <h5 className="total-0">45</h5>
              
                </div>
                <button className="ajouter-1"><i className="fa fa-plus"></i> ajouter score</button>
              </div>
              <div className="score-1">
                <h3 className="papi" > {props.joueur2}</h3>
                <div className="display-1">
                  <ul>
                    <li>5</li>
                    <li>4</li>
                  </ul>      
                  <h5 className="h5-1">Total: </h5>
                  <h5 className="h5-5">54</h5>
                </div>
                <button className="ajouter-3"><i className="fa fa-plus"></i> ajouter score</button>
              </div>
              <div className="score-2">
                  <h3 className="h3-1"> {props.joueur3}</h3>
                  <div className="display-2"> 
                     <h5 className="h5-2"> Aucun score</h5>
                      <div className="display-3">
                          <h5 className="h3-5">total:</h5>
                          <h5 className="h3-6">0</h5>
                      </div>
                  </div>
                  <div className="joint-1">
                      <h5 className="quiter">Score</h5>
                              <input src="text" className="place" value="Nouveau score" ></input>
                                <button className="times"><i className="fa fa-times" ></i> </button>
                                  <h6 className="joint">m</h6>
                                <button className="details" ><i className="fa fa-check"></i> ajouter score</button>
                  </div> 
              </div>
              <div className="score-3">
                <div className="display-3">
                <h3 className="h3-8">Score gagnant:</h3>
                <h3 className="h3-7">{props.score}</h3>
                </div>
              </div>

            
            </div>
              
        </div>
            
            
      </div>
    )

}
export default DetailsPage