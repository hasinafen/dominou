import './components/vueA.js';
import './components/vueb.js';
import './components/vueb.css';
import './components/vuec.css';
import './App.css';

function App1 () {


    return(
    <div className="vuec_container">
      <div className="menu">

      </div> 
      <div className="title">
        <h2 className="h2">partie de 3 joueur</h2>
        <div className="score">
        <h3 className="tojo">Tojo</h3>
       
        <div className="display">
        <ul className="li">

          <li>10</li>
          <li>5</li>
          <li>30</li>
        </ul>
        <h5 className="total">Total : 45</h5>
       
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
        <h5 className="h5-1">Total:45 </h5>
        </div>
        <button className="ajouter-1"><i class="fa fa-plus"></i> ajouter score</button>

        
      </div>
      <div className="score-2">
        <h3 className="h3-1"> Nant</h3>
        <div className="display-2"> 
        <h5 className="h5-2"> Aucun score</h5>
        {/* <h5 className="h5-3">Total: 0</h5> */}
        <div className="display-3">
        <h5 className="h3-5">total:</h5>
        <h5 className="h3-6">120</h5>

        </div>
        </div>
        <h6 className="h6-1">score</h6>
        <input src="text" className="input-1" placeholder="Nouveau score"></input>
        <button className="ajouter-2"><i class="fa fa-check"></i> ajouter score</button>
      </div>
      <div className="score-3">
        <div className="display-3">
        <h3 className="h3-5">Score gagnant:</h3>
        <h3 className="h3-6">120</h3>

        </div>
      </div>

     
      </div>
    </div>
    )
 
}

export default App1;
