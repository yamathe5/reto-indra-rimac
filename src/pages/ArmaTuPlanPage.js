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
/* Auth Context */
import { useAuth } from "../context/auth-context"


export default function ArmaTuPlanPage (){
  const [coberturasFormData, setCoberturasFormData]  = React.useState(COBERTURAS_DATA)
  const [initialAmount, setInitialAmount] = React.useState(20)
  const [sumaAsegurada, setSumaAsegurada] = React.useState(14500)
  
  const { logout, user } = useAuth()

  function handleLogout(){
    logout()
  }
 
  return (
    <>
      <Header/>

      <div className="main-arma-tu-plan">
        <div className="arma-tu-plan">
          <Sidebar/>
          <div className="arma-tu-plan__user-card-container">
            <button className="rounded-button__red" onClick={handleLogout}>	&#x3C;</button>
            <span className="text-sm gray-100 font-400"> VOLVER </span>
            <h2 className="headline-md mg-top-24">!Hola, <span className="red-300">{user.name}!</span></h2>
            <p className="text-lg gray-300">Conoce las coberturas para tu plan</p>
            <UserCard user={"user"}/>
          </div>

          <SumaAseguradaSelector sumaAsegurada={sumaAsegurada}
                                 setSumaAsegurada={setSumaAsegurada}
                                 coberturasFormData={coberturasFormData} 
                                 setCoberturasFormData={setCoberturasFormData}
                                 setInitialAmount={setInitialAmount}/> 
        
          <PlanesForm coberturasFormData={coberturasFormData} 
                      setCoberturasFormData={setCoberturasFormData} 
                      setInitialAmount={setInitialAmount}/>

          <TotalPrice sumaAsegurada={sumaAsegurada} initialAmount={initialAmount} coberturasFormData={coberturasFormData} /> 
        </div>
      </div>
    </>
  )
}