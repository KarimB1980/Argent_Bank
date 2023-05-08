// import React from 'react';
import '../pages/style/Main.css';



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { accountService } from '../_service/AccountService';

// import './auth.css'

// const Login = () => {



const SignInContent = () => {
  let navigate = useNavigate()

  // Attention ici mise en place de valeur par défaut pour travailler.
  // NE JAMAIS FAIRE CELA
  const [credentials, setCredentials] = useState({
    email: 'tony@stark.com',
    password: 'password123'
  })

  // Gestion de la modification des champs du formulaire
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  // Soumission du formulaire
  const onSubmit = (e) => {
    e.preventDefault()
    accountService.login(credentials)
      .then(res => {
        // Sauvegarde du token et envoi vers admin
        // accountService.saveToken(res.data.access_token)
        accountService.saveToken(res.data.body.token)

        // navigate('/admin', {replace: true})
        navigate('/profile', {replace: true})
      })
      .catch(error => console.log(error))
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">
              Username
            </label>
            <input type="text" name="email" value={credentials.email} onChange={onChange} id="email" autoComplete="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">
              Password
            </label>
            <input type="password" name="password" value={credentials.password} onChange={onChange} id="password" autoComplete="current-password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default SignInContent