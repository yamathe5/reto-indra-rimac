import React from "react"

import ToggleSwitch from "../ToggleSwitch";
import ReadMoreReadLess from "../ReadMoreReadLess";

export default function Cobertura (
  {coberturasFormData, setCoberturasFormData, setInitialAmount, 
  id, img, selected, title, text, price}){
  
  const [readMoreReadLess, setReadMoreReadLess] = React.useState(false);

  function increasePrice(){
    setInitialAmount((prev)=> prev + price)
    toggleCoberturasFormData()
  }

  function decreasePrice(){
    setInitialAmount((prev)=> prev - price)
    toggleCoberturasFormData()
  }


  function toggleCoberturasFormData(){
    let newToggledCoberturas = coberturasFormData.map((item)=>{
      if (item.id === id ) {
        return {
          ...item, 
          selected: !item.selected
        }
      }else return item
    
    })
    setCoberturasFormData(newToggledCoberturas)
  }

  return (
    <>
      <div className="coberturas-container__form__cobertura">
        <img alt="cobertura imagen" src={img} />

        <h4 className="headline-xxs">{title}</h4>
        <ToggleSwitch checked={selected} handleOnClickChangePrice={selected ? decreasePrice : increasePrice}/> 
        <div className="cobertura__info text-md">
          { readMoreReadLess ? text : "" }
        </div>
        <ReadMoreReadLess setReadMoreReadLess={setReadMoreReadLess} readMoreReadLess={readMoreReadLess}/>
      </div>
    </>
  )
}