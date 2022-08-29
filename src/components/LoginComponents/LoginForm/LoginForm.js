import React from 'react'
/* Mock data */

/* Utilis */
import formValidation from '../../utilis';

/* Styles */
import "./loginForm.scss"
import { useAuth } from '../../../context/auth-context';

export default function LoginForm() {
  const { login } = useAuth();

  const [check, setCheck] = React.useState(false);
  const [documentType, setDocumentType] = React.useState("DNI");
  const [documentNumber, setDocumentNumber] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [placa, setPlaca] = React.useState("")


  function handleSelectChange(e){
    setDocumentType(e.target.value)
  }
  function handlePhoneChange(e){
    setPhone(e.target.value)
  }
  function handlePlacaChange(e){
    setPlaca(e.target.value)
  }
  function handleDocumentNumberChange(e){
    setDocumentNumber(e.target.value)
  }
  function handleChange (e) {
    setCheck(e.target.checked)
  }


  function handleSubmit(event){
    event.preventDefault();

    const { documentType, documentNumber, phone, placa } = event.target.elements;

    if(!formValidation(documentType, documentNumber, phone, placa, check)){
      console.log(documentType.value, documentNumber.value, phone.value, placa.value, check)
      console.error("No se ingreso algun dato de manera correcta")
      return
    }
    let credentials = {
      documentType:documentType.value, 
      documentNumber:documentNumber.value, 
      phone:phone.value, 
      placa:placa.value
    }

    login(credentials).catch((error)=>console.log(error));
  }
  return (
    <>
    
      <h2 className="form-container__description headline-sm gray-500">Dejanos tus datos</h2>
      <form className="form" onSubmit={handleSubmit}>
        
        <div className="form__input-container">
          <label htmlFor="documentType"></label>
          <select onChange={handleSelectChange} className="form__select" name="documentType" >
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
          <label htmlFor="documentNumber"></label>
          {documentType === "DNI"?  
            <input pattern="[0-9]{8}" 
            value={documentNumber} 
            maxLength={8}
            onChange={handleDocumentNumberChange} 
            placeholder="DNI" 
            className="form__document" 
            name="documentNumber" 
            type="text" required/> :

            <input pattern="[0-9]{12}" 
            value={documentNumber} 
            maxLength={12}
            onChange={handleDocumentNumberChange} 
            placeholder="Pasaporte" 
            className="form__document"
            name="documentNumber" 
            type="text" required/> 
          }
        </div>

        <div className="form__input-container">
          <label htmlFor="phone"></label>
          <input pattern="[0-9]{9}"
          maxLength={9}
          value={phone}
          onChange={handlePhoneChange}
          className="form__phone"
          placeholder="Telefono"
          name="phone"
          type="phone" required/>
        </div>

        <div className="form__input-container">
          <label htmlFor="placa"></label>
          <input pattern="[0-9|A-Z]{3}-[0-9|A-Z]{3}"
          maxLength={7} 
          placeholder="Placa" 
          onChange={handlePlacaChange} 
          value={placa} 
          className="form__placa" 
          name="placa" 
          type="text" required/>
        </div>

        <div className="form__input-container flex align-center gap ">
          <input className="form__check" defaultChecked={check} 
          onChange={handleChange} 
          id="check"
          name="check"
          type="checkbox" required/>
          <label className="text-sm roboto" htmlFor="check">
            Acepto la <u className='font-400'>Política de Protecciòn de Datos Personales</u>  y los <u className='font-400'>Términos y Condiciones.</u></label>
        </div>

        <button className="form__submit button" type="submit">COTIZALO</button>
      </form>
    </>
  )
}
