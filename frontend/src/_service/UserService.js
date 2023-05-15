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
  return (
    Axios.put('/profile', user), 
    getUser()
    .then(res => {
      localStorage.setItem('firstName',res.data.body.firstName)
      localStorage.setItem('lastName', res.data.body.lastName)
      // Evènement au changement du localStorage
      window.dispatchEvent(new Event("storage"));
    })
    .catch(err => console.log(err))
  )
}

// Déclaration des services pour import
export const userService = {
  getUser, updateUser
}