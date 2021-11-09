
import './creation-page.css';
import HomePage from './HomePage';
import { useEffect, useState } from 'react';
import React from 'react';




 
const CreationPage =(props)=>{
    console.log(props)
    const [inputValue , setInputValue]=useState("")
    const [inputValueEvent, setInputValueEvent]=useState("")
    const [inputValide , setInputValide]=useState("")
    const [inputButton , setInputButton]=useState("")
    const [isInputValueEmpty, setIsInputValueEmpty]=useState(null)
    const [isInputInvalid , setIsInputInvalid]=useState(null)
    const [isInputButton, setIsInputButton]=useState(null)
    const [isInput , setInput]=useState(null)




    useEffect(() =>{
        if (isInputValueEmpty ===true && isInputInvalid ===true && isInput ===true && isInputButton === true){
            props.onSubmit({
                joueur1:inputValue ,
                joueur2 :inputValueEvent,
                joueur3:inputValide,
                score:inputButton
            })
        }
    },[isInputValueEmpty, isInputInvalid, isInput,isInputButton ])
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleButtonClick = (e) =>{
        if (inputValue === ''){
            
        
            setIsInputValueEmpty(false)
        }else{
            setIsInputValueEmpty(true)

        }
        if (inputValueEvent === ''){
            setIsInputInvalid(false)
        }else{
            setIsInputInvalid(true) 
        }
        if (inputValide === ''){
            setInput(false)
        }else{
            setInput(true)
        }
        if (inputButton === ''){
            setIsInputButton(false)
        }else{
            setIsInputButton(true)
        }

    }
    const handleInput = (e)=>{
        setInputValueEvent(e.target.value)
    }

    const handleValide = (e)=>{
        setInputValide(e.target.value)
    }

    const handleInputButton=(e)=>{
        setInputButton(e.target.value)
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
                                <input src="text" className="test" value={inputValue} onChange={handleInputChange} className="test"></input>
                                {
                                    isInputValueEmpty=== false && <h6 className="empty">required</h6>
                                }
                                <label className="label">joueur 2 <span className="etoil">*</span></label>
                                <input src="text" className="test" value={inputValueEvent} onChange={handleInput}></input>
                                {
                                    isInputInvalid === false && <h6 className="empty">required</h6>
                                }
                                <label className="label">joueur 3</label>
                                <input src="text" className="test"  value={inputValide} onChange={handleValide}></input>
                                {
                                    isInput === false && <h6 className="empty">required</h6>
                                }
                                <label className="label">score gagnant </label>
                                <input src="text" className="test" value={inputButton} onChange={handleInputButton}></input>
                                {
                                    isInputButton=== false && <h6 className="empty">required</h6>
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