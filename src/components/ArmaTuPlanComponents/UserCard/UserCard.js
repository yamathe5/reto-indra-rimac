import RimacCarCard from "../../../images/Rimac-car-card.png"

import { useAuth } from "../../../context/auth-context";

import "./user-card.scss";

export default function UserCard (){
  let {user} = useAuth()
  
  return (
    <div className="arma_tu_plan--user_card">
      <p className="text-sm font-400 gray-100" >Placa {user.auto.placa}</p>
      <h3 className="headline-xxs">{user.auto.marca} {user.auto.año} <br/> {user.auto.modelo}</h3>
      <img alt="Rimac Client Service Guy" src={RimacCarCard}/>
    </div>

  )
}