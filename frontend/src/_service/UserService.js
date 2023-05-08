import Axios from './CallerService'
import { accountService } from './AccountService'

/**
 * Connexion vers l'API
 * @param {object} accountService.isLogged() 
 * @returns {Promise}
 */
let getUser = () => {
  return Axios.post('/profile', accountService.getToken(),)
}

/**
 * Mise à jour d'un utilisateur
 * @param {number} user 
 * @returns {Promise}
 */
let updateUser = (user) => {
  // return Axios.patch('/profile', user)
  return Axios.put('/profile', user)
}

// Déclaration des services pour import
export const userService = {
  getUser, updateUser
}