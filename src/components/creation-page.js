import './creation-page.css';


 const CreationPage =()=>{
    return(
      <div>
      <div className="vueb_container">
      <section className="vueb">
        <div className="menu">
        <button className="create-1"><i class="fa fa-home " ></i></button>
        <button className="creat-2"><i className="fa fa-info-circle"></i></button>
          
        </div>
        <div className="titre">
          <h1 className="h1">Nouvelle partie</h1>
          <div className="type_de_joueur">

          <div className="input">
            <h6 className="margin" >joueur1</h6>
            <input src="text" className="test" placeholder="nom du joueur1"></input>

          </div>
          <div className="input">
            <h6 className="margin">joueur2</h6>
            <input src="text" className="test" placeholder="nom du joueur2"></input>

          </div>
          <div className="input">
            <h6 className="margin">joueur3</h6>
            <input src="text" className="test" placeholder="nom du joueur3"></input>

          </div>
          <div className="input">
            <h6 className="margin">Score gagnant</h6>
            <input src="text" className="test" placeholder="score gagnant"></input>

          </div>


          </div>
          <div className="click">
            <button className="annuler">  <i class="fa fa-chevron-left"> </i> Annuler</button>
            <button className="red"> Ajouter <i class="fa fa-plus"></i></button>
          </div>
        </div>
      </section>
    </div>
   </div>
    )
}
export default CreationPage