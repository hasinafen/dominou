import './components/home.css';
import CreationPage from './components/CreationPage';
import './components/CreationPage';
import DetailsPage from './components/DetailsPage';
import './components/about-page.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';
import './App.css';
import ObjectCours from './components/ObjectCours';





function App1 () {
    const [ShowCreation , setShowCreation]= useState(false)
    const [detailsScore, setDetailsScore]=useState({})
   
    const handleButtonAddClick =()=>{
        setShowCreation(true)
        setShowHomePage(false)
    }
    const handleClickAnnuler = ()=>{
        setShowHomePage(true)
        setShowCreation(false)
    }
 

    const [ShowHomePage , setShowHomePage]=useState(true)
    const handleClickD =()=>{
        setShowHomePage(true)
        setShowDetailsPage(false)
        setShowCreation(false)
    }
    const handleClickFunction =()=>{
        setShowHomePage(true)
        setShowAboutPage(false)
    }
    const handleClickT =()=>{
        setShowAboutPage(true)
        setShowHomePage(false)
    }
    const [ ShowDetailsPage , setShowDetailsPage]=useState(false)
    const handleClickButtonAdd =()=>{
        setShowAboutPage(true)
        setShowDetailsPage(false)
        setShowCreation(false)
    }
    const [ShowAboutPage , setShowAboutPage]=useState(false)
    const handleSubmit=(e)=>{
       
        setDetailsScore(e)
        setShowDetailsPage(true)
    }
     return(
            <div>
            <div>
            <div className="page-container">
                {
                               (ShowCreation === true && ShowDetailsPage === false) && 
                    <CreationPage 
                        onSubmit = {handleSubmit}  
                        onClickAnnuler ={handleClickAnnuler}/>
                }
                {
                    ShowHomePage === true && <HomePage onButtonAddClick={handleButtonAddClick} onClickT ={handleClickT}/>
                }
                {
                    ShowAboutPage === true && <AboutPage onClickFunction={handleClickFunction}/>
                } 
            </div>  
            {
                ShowDetailsPage === true &&  
                <DetailsPage 
                    score={detailsScore.score}
                    joueur1={detailsScore.joueur1} 
                    joueur2={detailsScore.joueur2}
                    joueur3={detailsScore.joueur3}
                    onClickD={handleClickD} 
                    onClickButtonAdd={handleClickButtonAdd}                  
                />
            }
            </div>
            <ObjectCours />
           </div>
     
       
    )
 
}

export default App1;
