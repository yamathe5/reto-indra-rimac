import "./welcome-banner.scss";


export default function WelcomeBanner (){
  return (
  <div className="main-presentation">
    <div className="main-presentation__img"  alt="Rimac Logo"></div>
    <div className="main-presentation__text-container">
      <p className="text-xs font-700 gray-500">!Nuevo!</p>
      <h1 className="headline-md gray-500">Seguro vehicular <span className="red-300">Tracking</span></h1>
      <p className="text-md roboto gray-300">Cuentanos donde le haras seguimiento a tu seguro</p>
    </div>
  </div>
  )
}