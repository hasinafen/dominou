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
        <h5 className="tojo">Tojo</h5>
        <h6 className="total">total:45</h6>
        <ul className="li">

          <li>10</li>
          <li>5</li>
          <li>30</li>
        </ul>
        <button className="ajouter"><i class="fa fa-plus"></i> ajouter score</button>
      </div>
      <div className="score">
        <h5 className="tojo">Papi</h5>
        <h6 className="total">total:10</h6>
        <ul className="li">

          <li>5</li>
          <li>5</li>
          
        </ul>
        <button className="ajouter"><i class="fa fa-plus"></i> ajouter score</button>
      </div>
      <div className="score">
        <h5 className="tojo">Nant</h5>
        <div className="tota">
        <h6>Aucun score</h6>
        <h6 className="total">total:0</h6>
       

        </div>
        <h6 className="inputs">Score</h6>
        <input src="text" className=" marg" placeholder="nouveau score"></input>
        <button className="ajout">sauver garder</button>
      </div>
      </div>
      
      

    </div>
    )
 
}

export default App1;
