
const details =()=>{
    return(
        <div className="vuec_container">
      <div className="menu">
      <button className="home"><i className="fa fa-home"></i></button>
      
      <button className="circle"><i className="fa fa-info-circle"></i></button>      
      </div> 
      <div className="title">
      <div className="jone">
        

        </div>
        
        <div className="pen">
        
        <h2 className="h2">partie de 3 joueur <button className="button-1"><i class="fa fa-pen"></i></button></h2>

        </div>
        
        <div className="score">
        <h3 className="tojo">Tojo</h3>
       
        <div className="display">
        <ul className="li">

          <li>10</li>
          <li>5</li>
          <li>30</li>
        </ul>
        <h5 className="total">Total:</h5>
        <h5 className="total-0">45</h5>
       
        </div>
       
        <button className="ajouter-1"><i class="fa fa-plus"></i> ajouter score</button>
      </div>
      <div className="score-1">
        <h3 className="papi"> Papi</h3>
        <div className="display-1">
        <ul>
          <li>5</li>
          <li>4</li>

        </ul>      
        <h5 className="h5-1">Total: </h5>
        <h5 className="h5-5">54</h5>
        </div>
        <button className="ajouter-3"><i class="fa fa-plus"></i> ajouter score</button>

        
      </div>
      <div className="score-2">
        <h3 className="h3-1"> Nant</h3>
        <div className="display-2"> 
        <h5 className="h5-2"> Aucun score</h5>
        {/* <h5 className="h5-3">Total: 0</h5> */}
        <div className="display-3">
        <h5 className="h3-5">total:</h5>
        <h5 className="h3-6">0</h5>

        </div>
        </div>
        <h6 className="h6-1">score</h6>
        <div className="float">
        <input src="text" className="input-1" placeholder="Nouveau score" ></input>
         <button className="times"><i class="fa fa-times" ></i> </button>
        </div>
        <button className="ajouter-2"><i class="fa fa-check"></i> ajouter score</button>
      </div>
      <div className="score-3">
        <div className="display-3">
        <h3 className="h3-8">Score gagnant:</h3>
        <h3 className="h3-7">120</h3>

        </div>
      </div>

     
      </div>
      
     
    </div>
    )

}
export default details