import { useState } from 'react/cjs/react.development';
import ButtonScore from './ButtonScore';
import Score from './Score';
import'./details-page.css';


const DetailsPage =(props)=>{
   
    
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
              <h3 className="tojo" ></h3>
            <Score name={props.joueur1}/>
            <Score name={props.joueur2}/>
            <Score name={props.joueur3}/>
            <div className="flexDiv">
                <h3 className="h3-8">Score gagnant:</h3>
                <h3 className="h3-7">{props.score}</h3>
            </div>
            </div>
        </div>
            
            
      </div>
    )

}
export default DetailsPage