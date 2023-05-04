import React, { useEffect, useRef, useState } from 'react';
import './style/ErrorPage.css'
// import { Link } from 'react-router-dom'
import NavigationProfile from '../components/NavigationProfile'
import Footer from '../components/Footer'

import { userService } from '../_service/UserService'

// Creation of the profil page
const Profile = () => {
  const [userFirstName, setUserFirstName] = useState([])
  const [userLastName, setUserLastName] = useState([])

  const flag = useRef(false)

  // Récupération des données de l'utilisateur à l'affichage
  useEffect(() => {
    if(flag.current === false){
      userService.getUser()
        .then(res => {
          // Liste dans le state
          setUserFirstName(res.data.body.firstName)
          setUserLastName(res.data.body.lastName)
          console.log(res.data.body.firstName)
        })
        .catch(err => console.log(err))
    }

    return () => flag.current = true
      
  }, [])

  return (
    <div id="profil">
      <NavigationProfile/>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userFirstName} {userLastName}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Profile