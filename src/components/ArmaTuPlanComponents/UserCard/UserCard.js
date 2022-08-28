import RimacCarCard from "../../../images/Rimac-car-card.png"

import "./user-card.scss";

export default function UserCard (){
  let user = ""

  
  return (
    <div className="arma_tu_plan--user_card">
      <p className="text-sm font-400 gray-100" >Placa {user.placa}</p>
      <h3 className="headline-xxs">{user.auto} {user["año-auto"]} <br/> {user["modelo-auto"] || "BMW"}</h3>
      <img alt="Rimac Client Service Guy" src={RimacCarCard}/>
    </div>

  )
}