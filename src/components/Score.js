 import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import AjouterScore from "./AjouterScore"
import ButtonScore from "./ButtonScore"

const Score =(props)=>{

    const [Show, setShow]=useState(false)
    const [scores, setScores] = useState([])
    const [winner, setWinner]=useState(false)
    const [count, setCount]=useState(0)
    const handleClickButton=()=>{
        setShow(true)
    }
    // const arr = [2, 3, 4]
    // const arr2 = [...arr, 5, 6, 7] => [2, 3, 4, 5, 6, 7]
    const handleSubmit = (e) => {
        setScores([...scores, parseInt(e)])
        setShow(false)
    }
    
    useEffect(()=>{
        const total =  scores.reduce(function(accumulateur, valeurCourante, index){
            return accumulateur + valeurCourante;
        },0)
        console.log(total)
    
        if( total >= 120 ){
            alert('total')
            
        }
    },[scores])
  
  
     return(
        <div>
            <div className="score">
                <div className="flex">
                    <h3 className="tojo" >{props.name}</h3>
                    <h4 className="start"><i className="fa fa-star"></i></h4>
                </div>
                <div className="display">
                <ul className="li">
                  {
                      scores.map((item, index) =>{
                          return (
                            <li> {item}</li>
                          )
                      })
                  }
                </ul>
                <h5 className="total">Total:</h5>
                <h5 className="total-0">
                    {
                      scores.reduce(function(accumulateur, valeurCourante, index){
                          return accumulateur + valeurCourante;
                      },0)
                    }
                   
                </h5>
                </div>
                <ButtonScore onClickButton={handleClickButton}/>
                {
                    Show === true && <AjouterScore onSubmit={handleSubmit}/>
                }
              
            </div>
        </div>
     )
}
export default Score