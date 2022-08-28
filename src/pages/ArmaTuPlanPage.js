import React from "react"
/* Components */
import Header from "../components/common/Header/Header"
import UserCard from "../components/ArmaTuPlanComponents/UserCard/UserCard"
import Sidebar from "../components/ArmaTuPlanComponents/Sidebar"
import SumaAseguradaSelector from "../components/ArmaTuPlanComponents/SumaAseguradaSelector"
import TotalPrice from "../components/ArmaTuPlanComponents/TotalPrice"
import PlanesForm from "../components/ArmaTuPlanComponents/PlanesForm/PlanesForm"
/* Styles */
import "./scss/arma-tu-plan-page.scss"
/* Mock data */
import { COBERTURAS_DATA } from "../mock/coberturas.mock"



export default function ArmaTuPlanPage (){
  const [coberturasFormData, setCoberturasFormData]  = React.useState(COBERTURAS_DATA)
  const [initialAmount, setInitialAmount] = React.useState(20)


  function handleLogout(){

  }
 
  return (
    <>
      <Header/>

      <div className="main-arma-tu-plan">
        <div className="arma-tu-plan">
          <Sidebar/>
          <div className="arma-tu-plan__user-card-container">
            <button className="rounded-button__red" onClick={handleLogout}>	&#x3C;</button>
            <span> VOLVER </span>
            <h2 className="headline-md mg-top-24">!Hola, <span className="red-300">{"user.nombre"}!</span></h2>
            <p className="text-lg">Conoce las coberturas para tu plan</p>
            <UserCard user={"user"}/>
          </div>

          <SumaAseguradaSelector coberturasFormData={coberturasFormData} 
                         setCoberturasFormData={setCoberturasFormData}
                         setInitialAmount={setInitialAmount}/> 
        
          <PlanesForm coberturasFormData={coberturasFormData} 
                      setCoberturasFormData={setCoberturasFormData} 
                      setInitialAmount={setInitialAmount}/>

          <TotalPrice initialAmount={initialAmount}/> 
        </div>
      </div>
    </>
  )
}