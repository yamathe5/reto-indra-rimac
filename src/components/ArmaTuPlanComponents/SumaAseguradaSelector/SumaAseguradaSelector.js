import React from "react"

import "./suma-asegurada-selector.scss"


const SUMA_ASEGURADA_VARIABLES = {
  MAX_AMOUNT: 16500,
  MIN_AMOUNT: 12500,
  INTERVAL: 100,
}


export default function SumaAseguradaSelector({ setInitialAmount, coberturasFormData, setCoberturasFormData }){  
  const [sumaAsegurada, setSumaAsegurada] = React.useState(14500)
  
  function increaseSumaAsegurada(){
    setSumaAsegurada((prevsumaAsegurada) => { 
      if (prevsumaAsegurada === SUMA_ASEGURADA_VARIABLES.MAX_AMOUNT) return prevsumaAsegurada
      return prevsumaAsegurada + SUMA_ASEGURADA_VARIABLES.INTERVAL
    })
    validateSelectedCobertura(sumaAsegurada + SUMA_ASEGURADA_VARIABLES.INTERVAL) 
  }

  function decreaseSumaAsegurada(){
    setSumaAsegurada((prevsumaAsegurada)=>{
      if (prevsumaAsegurada === SUMA_ASEGURADA_VARIABLES.MIN_AMOUNT) return prevsumaAsegurada
      return prevsumaAsegurada - SUMA_ASEGURADA_VARIABLES.INTERVAL
    })
    validateSelectedCobertura(sumaAsegurada - SUMA_ASEGURADA_VARIABLES.INTERVAL) 
  }

  function toggleSelectCobertura(coberturasData){
    let newCoberturasData = coberturasData.map((item)=>{
      if (item.id === 1){
        return {
          ...item, 
          selected: !item.selected
        }
      }else {
        return item
      }
    })
    return newCoberturasData
  }

  function validateSelectedCobertura(sumaAsegurada) {  
    const COBERTURA_CHOQUE = coberturasFormData[1]
    if(sumaAsegurada > 16000 && COBERTURA_CHOQUE.selected === true){
      setInitialAmount((prev) => prev - COBERTURA_CHOQUE.price)

      let newCoberturasData = toggleSelectCobertura(coberturasFormData)
      setCoberturasFormData(newCoberturasData)
    }else if (sumaAsegurada <= 16000 && COBERTURA_CHOQUE.selected === false) {
      setInitialAmount((prev) => prev + COBERTURA_CHOQUE.price)

      let newCoberturasData = toggleSelectCobertura(coberturasFormData)
      setCoberturasFormData(newCoberturasData)
    }
  }
  
  return (
  <div className="price-selector">
    <h3 className="headline-xxs">Indica la suma asegurada</h3>
    <p className="text-sm">MIN_AMOUNT $12,500 | MAX_AMOUNT $16,500</p>

    <div className="price-selector__buttons">
      <button onClick={decreaseSumaAsegurada}>-</button>
      <p className="headline-xxs">$ {sumaAsegurada}</p>
      <button onClick={increaseSumaAsegurada}>+</button>
    </div>
  </div>
  )
}