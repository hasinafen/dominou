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

    const [ShowHomePage , setShowHomePage]=useState(true)
    const handleClikButton=()=>{
        setShowHomePage(true)
        setShowCreation(false)
    }
    const handleClick =()=>{
        setShowHomePage(true)
        setShowDetailsPage(false)
        setShowCreation(false)
    }

    const [ ShowDetailsPage , setShowDetailsPage]=useState(false)
    const handleButtonClick = ()=>{
        setShowDetailsPage(true)
    }
    
   

    console.log(ShowHomePage)
 
  
  
  
     return(
      
     
        <div>
            <div className="page-container">
                {
                    (ShowCreation === true && ShowDetailsPage === false) && 
                    <CreationPage onButtonClick={handleButtonClick}   onClikButton = {handleClikButton}/>
                }
                {
                    
                }

                {
                    ShowHomePage === true && <HomePage onButtonAddClick={handleButtonAddClick}/>
                }

            </div>  

            {
                ShowDetailsPage === true && <DetailsPage onClick = {handleClick}/> 
            }
        </div>
      
    )
 
}

export default App1;
