import './components/home.css';
import CreationPage from './components/CreationPage';
import './components/CreationPage';
import DetailsPage from './components/DetailsPage';
import './components/about-page.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';
import './App.css';
 








function App1 () {
    const [ShowCreation , setShowCreation]= useState(false)

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
    const handleSubmit =()=>{
        setShowDetailsPage(true)
        
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


  

    

   

    console.log(ShowHomePage)
 
  
   
     return(
            <div>
            <div>
            <div className="page-container">
                {
                     (ShowCreation === true && ShowDetailsPage === false) && 
                    <CreationPage onButtonClick={handleButtonClick}   onClikButton = {handleClikButton}
                     onClickAdd ={handleClickAdd} onClickAnnuler ={handleClickAnnuler} onSubmit={handleSubmit}/>
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
                ShowDetailsPage === true && <DetailsPage onClickD = {handleClickD} onClickButtonAdd = {handleClickButtonAdd}/>
            }
            </div>
            
      

           </div>
     
       
    )
 
}

export default App1;
