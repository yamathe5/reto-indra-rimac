const PHONE_PATTERN = /[1-9][0-9]{8}$/
const DOCUMENT_DNI_NUMBER_PATTERN = /[0-9][0-9]{7}$/
const DOCUMENT_PASSPORT_NUMBER_PATTERN = /[0-9][0-9]{11}$/
const PLACA_PATTERN = /[0-9|A-Z|a-z]{3}-[0-9|A-Z|a-z]{3}/

const DOCUMENT_TYPE = {
  DNI: "DNI",
  PASSPORT: "Pasaporte"
}

export default function formValidation(documentType, document, phone, placa, check){
  if(check === false){
    return false
  }
  
  if(phone.value.length !== 9 || phone.value.match(PHONE_PATTERN) == null){
    return false
  }

  if(documentType.value === DOCUMENT_TYPE.DNI){
    if(document.value.length !== 8 || document.value.match(DOCUMENT_DNI_NUMBER_PATTERN) == null){ 
      return false
    }
  }else if (documentType.value === DOCUMENT_TYPE.PASSPORT){
    if(document.value.length !== 12 || document.value.match(DOCUMENT_PASSPORT_NUMBER_PATTERN) == null ){ 
      return false
    }
  }
  
  if(placa.value.length !== 7 || placa.value.match(PLACA_PATTERN) == null ){
    return false
  }
  
  return true
}