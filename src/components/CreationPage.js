
import './creation-page.css';
import HomePage from './HomePage';






 
const CreationPage =(props)=>{
  
 
 
    return (
      <div>
      <div className="vueb_container">
      <section className="vueb">
        <div className="menu-1">
        <button className="create-1" onClick={props.onClikButton}><i className="fa fa-home " ></i></button>
        <button className="creat-2" onClick={props.onClickAdd}><i className="fa fa-info-circle"></i></button>
          
        </div>
        
        <div className="titre-1">
        <h1 className="post-1">Nouvelle partie</h1>

        <div className="position">
        <h1 className="post-2">Nouvelle partie</h1>
        
       </div>
       
          <div className="type_de_joueur">
          <div className="input">
            <h6 className="margin" >joueur1</h6>
            <input src="joueur1" className="test" placeholder="Nom du joueur1"></input>

          </div>
          <div className="input">
            <h6 className="margin">joueur2</h6>
            <input src="text" className="test" placeholder="Nom du joueur2"></input>

          </div>
          <div className="input">
            <h6 className="margin">joueur3</h6>
            <input src="text" className="test" placeholder="Nom du joueur3"></input>

          </div>
          <div className="input">
            <h6 className="margin">Score gagnant</h6>
            <input src="score" className="test" placeholder="Score gagnant"></input>

          </div>


          </div>
          <div className="click">
            <button className="annuler" onClick = {props.onClickAnnuler}>  <i className="fa fa-chevron-left"> </i> Annuler</button>

            <button className="red" onClick = {props.onButtonClick}> Ajouter <i className="fa fa-plus"></i>
              
            
            
            </button>
          </div>
        </div>
      </section>
    </div>
   
   </div>
    )
    }
export default CreationPage