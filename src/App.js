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
    const [detailsProps, setDetailsProps]=useState({})
    const [detailsJoueur2, setDetailsJoueur2]=useState({})
    const [detailsJoueur3, setDetailsJoueur3]=useState({})
    const [detailsScore, setDetailsScore]=useState({})
    console.log(detailsProps ,'ok')
    const handleButtonAddClick =()=>{
        setShowCreation(true)
        setShowHomePage(false)
    }
    const handleClickAdd =()=>{
        setShowAboutPage(true)
        setShowCreation(false)
    }
    const handleClickAnnuler = ()=>{
        setShowHomePage(true)
        setShowCreation(false)
    }
 

    const [ShowHomePage , setShowHomePage]=useState(true)
    const handleClikButton=()=>{
        setShowHomePage(true)
        setShowCreation(false)
    }
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
    const handleButtonClick = ()=>{
        setShowDetailsPage(true)
        
        
    }
    const handleClickButtonAdd =()=>{
        setShowAboutPage(true)
        setShowDetailsPage(false)
        setShowCreation(false)
    }
    
    const [ShowAboutPage , setShowAboutPage]=useState(false)
    const handleSubmit=(e)=>{
        console.log(e);
        setDetailsScore(e)
        setDetailsJoueur3(e)
        setDetailsJoueur2(e)
        setDetailsProps(e)
        setShowDetailsPage(true)

    }
console.log(detailsProps.joueur2)  
     return(
            <div>
            <div>
            <div className="page-container">
                {
                               (ShowCreation === true && ShowDetailsPage === false) && 
                    <CreationPage 
                        name = 'toto'
                        onSubmit = {handleSubmit}  
                        onClickAnnuler ={handleClickAnnuler} />
                }
                {
                    
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
                    joueur3={detailsJoueur3.joueur3}
                    joueur2={detailsJoueur2.joueur2}
                    joueur1={detailsProps.joueur1}
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
