import Axios from './CallerService'
import { accountService } from './AccountService'

/**
 * Connexion vers l'API
 * @param {object} credentials 
 * @returns {Promise}
 */
let getUser = (credentials) => {
  return Axios.post('/profile', accountService.isLogged())
}

/**
 * Récupération d'un utilisateur
 * @returns {Promise}
 */
// let getUser = () => {
//   console.log(Axios.get('/profile'))
//   return Axios.get('/profile')
// }

/**
 * Mise à jour d'un utilisateur
 * @param {number} user 
 * @returns {Promise}
 */
let updateUser = (user) => {
  return Axios.patch('/profile', user)
}

// Déclaration des services pour import
export const userService = {
   getUser, 
  updateUser
}