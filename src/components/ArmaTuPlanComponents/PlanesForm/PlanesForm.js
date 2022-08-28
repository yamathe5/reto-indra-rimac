import PlanesFormItem from "./PlanesFormItem"

import "./planes-form.scss"


export default function PlanesForm({ coberturasFormData, setCoberturasFormData, setInitialAmount }){

  return (
    <div className="coberturas-container">
      <h2 className="headline-xs">Agrega o quita coberturas</h2>
      <div className="coberturas-container__form">
        <div className="coberturas-container__form__sections">
          <div className="red-300 text-xs font-700 text-center section__selected">
            PROTEGE A TU AUTO
          </div>
          <div className="text-xs font-700 text-center">
            PROTEGE A LOS QUE TE RODEAN
          </div>
          <div className="text-xs font-700 text-center">
            MEJORA TU PLAN
          </div>
        </div>
        {coberturasFormData.map((item)=>{
          return <PlanesFormItem
          key={item.id}
          setInitialAmount={setInitialAmount} 
          coberturasFormData={coberturasFormData}
          setCoberturasFormData={setCoberturasFormData}
          title={item.title} 
          text={item.text}
          img={item.img}
          id={item.id}
          selected={item.selected} 
          price={item.price} 
          />
        })}
        
       
      </div>
    </div>
  )
}