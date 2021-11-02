
import './creation-page.css';
import HomePage from './HomePage';
import { useEffect, useState } from 'react';




 
const CreationPage =(props)=>{
    const [formData , setFormData]=useState({} )
  
    const handleChange = (value , key )=>{
        setFormData({...formData, ...{[key]: value}});
    }

    const submit = ()=>{
        if (isFormInValid()){
            return
        }
        alert(JSON.stringify(formData))
        console.log(formData);
    }

    const isFormInValid =()=>{
        let returnValue = false;
        formElements.forEach(formElements=>{
            if (formData[formElements.key]=== undefined){
                alert(formElements.label + " is missing")
                returnValue = true 
      
            }
        })
        return returnValue
    }

    const tab = [1, 25, 36, 78, true, { foo: 'bar' }]
    const tab0 = tab[0]

    const formElements = [{
            label : "Joueur 1 ",
            key : "Joueur 1"
        },{
            label : "Joueur 2",
            key : "Joueur 2"
        },{
            label : "Joueur 3",
            key : "Joueur 3"
        },{
            label : "Score gagnant",
            key : "Score gagnant"
        }
    ]
 
 
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
                                {
                                    formElements.map((formElement, index) =>{

                                        console.log(formElement, index, formElements[index]);
                                        return (
                                            <div>
                                                <label className="label-1">{formElement.label} <span className="label">*</span></label>
                                                <input value={formData[formElement.label]}  onChange={(e)=>{e.preventDefault(); handleChange(e.target.value, formElement.key)}} className="test"></input>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="click">
                            <button className="annuler" onClick = {props.onClickAnnuler}> <i className="fa fa-chevron-left"></i> Annuler</button>
                            <button className="red" onClick = {props.onButtonClick} onClick={submit}> Ajouter <i className="fa fa-plus"></i></button>
                        </div>
                    </div>
                </section>
            </div>
        
        </div>
    )
    }
export default CreationPage