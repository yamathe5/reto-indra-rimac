import React from "react"

import "./suma-asegurada-selector.scss"


const SUMA_ASEGURADA_VARIABLES = {
  MAX_AMOUNT: 16500,
  MIN_AMOUNT: 12500,
  INTERVAL: 100,
}

let dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0, 
  minimumFractionDigits: 0, 
});


export default function SumaAseguradaSelector({sumaAsegurada, setSumaAsegurada, setInitialAmount, coberturasFormData, setCoberturasFormData }){  
  
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
    <p className="text-sm font-400 gray-300">MIN $12,500 | MAX $16,500</p>

    <div className="price-selector__buttons">
      <button onClick={decreaseSumaAsegurada}>-</button>
      <p className="headline-xxs">{(dollarUS.format(sumaAsegurada))}</p>
      <button onClick={increaseSumaAsegurada}>+</button>
    </div>
  </div>
  )
}