import axios from 'axios'
import { accountService } from './AccountService'

// Basic setup of axios
const Axios = axios.create({
  baseURL: 'http://localhost:3001/api/v1/user'
})

// Interceptor for placing the token in the request
Axios.interceptors.request.use(request => {
  if(accountService.isLogged()){
    request.headers.Authorization = 'Bearer '+accountService.getToken()
  }
  return request
})

// API response interceptor for session verification
Axios.interceptors.response.use(response => {
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