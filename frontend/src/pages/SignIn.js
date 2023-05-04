import React from 'react'
import './style/Main.css'
import Navigation from '../components/Navigation'
import SignInContent from '../components/SignInContent'
import Footer from '../components/Footer'

// Creation of the signin page
const SignIn = () => {
  return (
    <section className='signin'>
      <Navigation/>
      <SignInContent/>
      <Footer/>
    </section>
  )
}

export default SignIn