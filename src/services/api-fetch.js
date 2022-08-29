import { API_URL } from "../config";

export default async function getUser () {
  return await fetch(`${API_URL}users/2`)
  .then(response => response.json())
  .then(({id, name, phone, email}) => ({id, name, phone, email}))
}

