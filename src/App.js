import './components/home.css';
import CreationPage from './components/CreationPage';
import './components/CreationPage';
import DetailsPage from './components/DetailsPage';
import './components/about-page.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import { useState } from 'react';
import './App.css';


function App1 () {
  const [ShowCreation , setShowCreation]= useState(false)
  const handleButtonAddClick =()=>{
    setShowCreation(true)
  }

     return(
      
     
      <div>
        <div className="page-container">
          {
            ShowCreation === true && <CreationPage/>
          }
        </div>
          <HomePage onButtonAddClick= {handleButtonAddClick}/>
           {/* <CreationPage/>
          <AboutPage/> 
          <DetailsPage/>   */}
      </div>
    )
 
}

export default App1;
