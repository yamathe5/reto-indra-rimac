/* Components */
import BackgroundImage from "../images/Gracias-backgroun-mobile.png"
import BackgroundImageDesktop from "../images/Gracias-dektop.png"
import Header from "../components/common/Header/Header"

import "./scss/gracias-page.scss"

export default function GraciasPage(){

  function handleLogout(){

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
          <p className="text-lg font-300">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</p>
          <span className="text-lg font-300">{"user.correo"}</span>

          <button onClick={handleLogout}>COMO USAR MI SEGURO | LOGOUT</button>
        </div>
      </div>
    </>
  )
}