
import './creation-page.css';
import HomePage from './HomePage';
import { useEffect, useState } from 'react';
import React from 'react';




 
const CreationPage =(props)=>{
    const [inputJoueur1 , setInputJoueur1]=useState("")
    const [inputJoueur2, setInputJoueur2]=useState("")
    const [inputJoueur3 , setInputJoueur3]=useState("")
    const [inputScore , setInputScore]=useState("")
    const [isInputValueEmpty, setIsInputValueEmpty]=useState(null)
    const [isInputInvalid , setIsInputInvalid]=useState(null)
    const [isInputButton, setIsInputButton]=useState(null)
    const [isInput , setInput]=useState(null)




    useEffect(() =>{
        if (isInputValueEmpty ===true && isInputInvalid ===true && isInput ===true && isInputButton === true){
            props.onSubmit({
                joueur1:inputJoueur1 ,
                joueur2 :inputJoueur2,
                joueur3:inputJoueur3,
                score:inputScore
            })
        }
    },[isInputValueEmpty, isInputInvalid, isInput,isInputButton ])
    const handleInputChange = (e) =>{
        setInputJoueur1(e.target.value)
    }
    const handleButtonClick = (e) =>{
        if (inputJoueur1 === ''){
            setIsInputValueEmpty(false)
        }else{
            setIsInputValueEmpty(true)

        }
        if (inputJoueur2 === ''){
            setIsInputInvalid(false)
        }else{
            setIsInputInvalid(true) 
        }
        if (inputJoueur3 === ''){
            setInput(false)
        }else{
            setInput(true)
        }
        if (inputScore === ''){
            setIsInputButton(false)
        }else{
            setIsInputButton(true)
        }

    }
    const handleInput = (e)=>{
        setInputJoueur2(e.target.value)
    }

    const handleValide = (e)=>{
        setInputJoueur3(e.target.value)
    }

    const handleInputButton=(e)=>{
        setInputScore(e.target.value)
    }
  
    return (
        <div>
            <div className="vueb_container">

                <section className="vueb">
                    <div className="menu-1">
                        <button className="create-1" onClick={props.onClikButton}><i className="fa fa-home"></i></button>
                        <button className="creat-2" onClick={props.onClickAdd}><i className="fa fa-info-circle"></i></button>
                    </div>
                    <div className="titre-1">
                        <h1 className="post-1">Nouvelle partie</h1>
                        <div className="position">
                            <h1 className="post-2">Nouvelle partie</h1>
                        </div>
                        <div className="type_de_joueur">
                               
                                
                            <div className="input">
                                <label className="label">joueur 1 <span className="etoil">*</span></label>
                                <input src="text" className="test" value={inputJoueur1} onChange={handleInputChange} className="test"></input>
                                {
                                    isInputValueEmpty=== false && <h6 className="empty">required</h6>
                                }
                                <label className="label">joueur 2 <span className="etoil">*</span></label>
                                <input src="text" className="test" value={inputJoueur2} onChange={handleInput}></input>
                                {
                                    isInputInvalid === false && <h6 className="empty">required</h6>
                                }
                                <label className="label">joueur 3</label>
                                <input src="text" className="test"  value={inputJoueur3} onChange={handleValide}></input>
                                {
                                    isInput === false && <h6 className="empty">required</h6>
                                }
                                <label className="label">score gagnant </label>
                                <input src="text" className="test" value={inputScore} onChange={handleInputButton}></input>
                                {
                                    isInputButton === false && <h6 className="empty">required</h6>
                                }
                            </div>
                        </div>
                        <div className="click">
                            <button className="annuler" onClick = {props.onClickAnnuler}> <i className="fa fa-chevron-left"></i> Annuler</button>
                            <button className="red" onClick = {props.onButtonClick} onClick = {handleButtonClick}> Ajouter <i className="fa fa-plus"></i></button>
                        </div>
                        
                    </div>
                </section>
            </div>
        
        </div>
    )
    }
export default CreationPage