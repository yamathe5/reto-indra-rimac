import Logo from "../../../images/Logo.png"
import Phone from "../../../images/phone.png"

import "./header.scss"

export default function Header (){
  return <header className="header">
   <div className="header-container">
    <img src={Logo} className="header-container__logo" alt="Rimac Logo"/>
    <div className="header-container-links">

      <div className="header-container__phone--phone-view">
        <img src={Phone} alt="Phone"/>
        <a className="purple-link text-md text-decoration-none" href="google.com" >Llamanos</a>
      </div>

      <div className="header-container__phone--dektop-view">
        <a className="header-container-links__help gray-300 text-md text-decoration-none roboto" href="google.com" >¿Tienes alguna duda?</a>
        <img src={Phone} alt="Phone"/>
        <a className="purple-link text-md text-decoration-none roboto"  href="google.com" >(01) 411 6001</a>
      </div>

    </div>
   </div>
  </header>
}