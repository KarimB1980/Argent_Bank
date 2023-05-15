import Axios from './CallerService'
// import jwt_decode from 'jwt-decode'
import { userService } from '../_service/UserService'

/**
 * Connexion vers l'API
 * @param {object} credentials 
 * @returns {Promise}
 */
let login = (credentials) => {
  return Axios.post('/login', credentials)
}

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token 
 */
let saveToken = (token) => {
  localStorage.setItem('token', token)

  userService.getUser()
  .then(res => {
    localStorage.setItem('firstName',res.data.body.firstName)
    localStorage.setItem('lastName', res.data.body.lastName)
    // Evènement au changement du localStorage
    window.dispatchEvent(new Event("storage"));
  })
  .catch(err => console.log(err))
}

/**
 * Suppression du token du localStorage
 */
let logout = () => {
  localStorage.removeItem('token')

  localStorage.removeItem('firstName')
  localStorage.removeItem('lastName')
}

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
let isLogged = () => {
  let token = localStorage.getItem('token')
  return !!token
}

/**
 * Récupération brut du token en localStorage
 * @returns {string}
 */
let getToken = () => {
  return localStorage.getItem('token')
}

// /**
//  * Récupération du payload du token
//  * @returns {object}
//  */
// let getTokenInfo = () => {
//   return jwt_decode(getToken())
// }

// Déclaration des services pour import
export const accountService = {
  login, saveToken, logout, isLogged, getToken
}