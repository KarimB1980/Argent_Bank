import Axios from './CallerService'
import { userService } from '../_service/UserService'

/**
 * Connection to the API
 * @param {object} credentials 
 * @returns {Promise}
 */
let login = (credentials) => {
  return Axios.post('/login', credentials)
}

/**
 * Save token, first name and last name in localStorage
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
 * Removing token, first name and last name from localStorage
 */
let logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('firstName')
  localStorage.removeItem('lastName')
}

/**
 * State of the presence of a token in localStorage
 * @returns {boolean}
 */
let isLogged = () => {
  let token = localStorage.getItem('token')
  return !!token
}

/**
 * Raw recovery of the token in localStorage
 * @returns {string}
 */
let getToken = () => {
  return localStorage.getItem('token')
}

// Declaration of services for import
export const accountService = {
  login, saveToken, logout, isLogged, getToken
}