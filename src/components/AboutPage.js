 

import './about-page.css';

 const AboutPage =(props)=>{
     return(
      <div className="about-container">
      <div className="about-menu">
          <button className="about-btn" onClick={props.onClickFunction}><i className="fa fa-home"></i></button>
      </div>
      <div className="titre">
      <h1 className="about-left">A propos</h1>
          <div className="about-titre"> 
                 
          </div>
                 <div className="about-span">
                         <span>Une appliction est pour enregistre les scor de jeux domino. </span>
                         <span> loren a dit qu'il est devenu . 
                         loren a dit qu'il est devenu . loren a dit qu'il est devenu .
                         loren a dit qu'il est devenu . loren a dit qu'il est devenu .</span>

                             <h3>Dévélopper par:</h3>
                                 <div className="about-format">
                                     <span className="about-feno">Feno Hasina</span>
                                     <button className="about-hasina"> <i className="fab fa-facebook"></i></button>
                                     <button className="about-fen"> <i className="fa fa-envelope"></i></button>
                                     <h1 className="about-photo"><i className="fa fa-user-circle"></i></h1>
                                         <div className="div">
                                             <span className="about">Nantenaina Fahendrena</span>
                                             <h1 className="about-hot"><i className="fa fa-user-circle"></i></h1>
                                             <button className="about-h"> <i className="fab fa-facebook"></i></button>
                                             <button className="about-f"> <i className="fa fa-envelope"></i></button>

                                         </div>
                                 </div>
                 </div>
            
      </div>
</div>

     )
 }
 export default AboutPage