 import ButtonScore from "./ButtonScore"

const Score =(props)=>{
     return(
         <div>
            <div className="score">
                <div className="flex">
                    <h3 className="tojo" >{props.name}</h3>
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
                <ButtonScore/>
            </div>
         </div>
     )
}
export default Score