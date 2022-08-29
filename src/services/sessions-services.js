import { tokenKey } from "../config";
import getUser from "./api-fetch";


import { getRandomCar } from "../mock/login.mock";

export async function login(credentials){
  let user = await getUser();
  let auto = {...getRandomCar(), placa: credentials.placa}
  
  delete credentials.placa
  user = {...user, ...credentials, auto:auto}

  return user
}

export function logout(){
  sessionStorage.removeItem(tokenKey) 
}