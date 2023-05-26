import Axios from './CallerService'
import { accountService } from './AccountService'

/**
 * Connection to the API
 * @param {object} accountService.isLogged() 
 * @returns {Promise}
 */
let getUser = () => {
  return Axios.post('/profile', accountService.getToken(),)
}

/**
 * Update a user
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
      // LocalStorage change event
      window.dispatchEvent(new Event("storage"));
    })
    .catch(err => console.log(err))
  )
}

// Declaration of services for import
export const userService = {
  getUser, updateUser
}