import "./welcome-banner.scss";


export default function WelcomeBanner (){
  return (
  <div className="main-presentation">
    <div className="main-presentation__img"  alt="Rimac Logo"></div>
    <div className="main-presentation__text-container">
      <p className="text-xs">!Nuevo!</p>
      <h1 className="headline-md">Seguro vehicular <span className="red-300">Tracking</span></h1>
      <p className="text-md">Cuentanos donde le haras seguimiento a tu seguro</p>
    </div>
  </div>
  )
}