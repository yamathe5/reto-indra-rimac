/* Components */
import BackgroundImage from "../images/Gracias-backgroun-mobile.png"
import BackgroundImageDesktop from "../images/Gracias-dektop.png"
import Header from "../components/common/Header/Header"

import "./scss/gracias-page.scss"
import { useAuth } from "../context/auth-context"

export default function GraciasPage(){

  const { logout, user } = useAuth()

  function handleLogout(){
    logout()
  }
  
  return (
    <>
      <Header/>
      <div className="main-gracias">
        <img alt="background imagen" className="gracias-img-mobile" src={BackgroundImage}/>
        <img alt="background imagen" className="gracias-img-dektop" src={BackgroundImageDesktop}/>

        <div className="gracias__text-container"> 
          <p className="red-300 headline-md">¡Te damos la bienvenida! </p>
          <h2 className="headline-md" >
              Cuenta con nosotros para proteger tu vehículo</h2>
          <p className="font-300 text-lg  gray-300 roboto">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</p>
          <span className="text-lg font-400 gray-300 roboto">{user.email}</span>

          <button className="font-700" onClick={handleLogout}>COMO USAR MI SEGURO | LOGOUT</button>
        </div>
      </div>
    </>
  )
}