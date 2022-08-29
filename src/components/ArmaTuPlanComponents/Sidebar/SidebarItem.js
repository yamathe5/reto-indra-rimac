import { useAuth } from "../../../context/auth-context"

export default function SidebarItem (){

  const { logout } = useAuth()

  function handleLogout(){
    logout()
  }

  return (
    <>
      <div className="sidebar--mobile">
        <button onClick={handleLogout} className="rounded-button__red">	&#x3C;</button>
        <p className="text-xs font-700" >PASO 2 DE 2</p>
        <div className="pruple-bar"></div>
      </div>
      
      <div className="sidebar--desktop">
        <div>
          <button className="rounded-button" >1</button>
          <p className="text-lg font-400 gray-100" >Datos</p>
        </div>
        <div>
          <button className="rounded-button__selected">2</button>
          <p className="text-lg font-400" >Arma tu plan</p>
        </div>
        
      </div>
    </>
  )
}