
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
           <h6 className="star"><i className="fa fa-star"></i></h6>

            <h6 className="margin" >joueur1</h6>
            <input type="text" className="test" onfocus="javascript: this.value=''" onblur="this.value='Entrez un pseudo'" value="Nom du joueur 1"></input>


          </div>
          <div className="input">
          <h6 className="sta"><i className="fa fa-star"></i></h6>
            <h6 className="margin">joueur2</h6>
            <input type="text" className="test" onfocus="javascript: this.value=''" onblur="this.value='Entrez un pseudo'" value="Nom du joueur 2"></input>


          </div>
          <div className="input">
            <h6 className="margin">joueur3</h6>
            <input type="text" className="test" onfocus="javascript: this.value=''" onblur="this.value='Entrez un pseudo'" value="Nom du joueur 3"></input>


          </div>
          <div className="input">
            <h6 className="margin">Score gagnant</h6>
            <input type="text" className="test" onfocus="javascript: this.value=''" onblur="this.value='Entrez un pseudo'" value="Score pour gagner"></input>


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