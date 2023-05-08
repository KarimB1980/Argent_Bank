import axios from 'axios'
import { accountService } from './AccountService'

// Paramétrage de base d'axios
const Axios = axios.create({
  baseURL: 'http://localhost:3001/api/v1/user'
})

// Intercepteur pour la mise en place du token dans la requête
Axios.interceptors.request.use(request => {
  if(accountService.isLogged()){
    request.headers.Authorization = 'Bearer '+accountService.getToken()
  }

  return request
})

// Intercepteur de réponse API pour vérification de la session et injection du prénom et du nom de l'utilisateur dans le localStorage
Axios.interceptors.response.use(response => {
  console.log(response)
  localStorage.setItem('firstname', response.data.body.firstName)
  localStorage.setItem('lastname', response.data.body.lastName)
  return response
}, error => {
  if(error.response.status === 401){
    accountService.logout()
    window.location = '/login'
  }else{
    return Promise.reject(error)
  }
})

export default Axios