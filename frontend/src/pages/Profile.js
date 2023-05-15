import React, { useEffect } from 'react';
import './style/ErrorPage.css'
import NavigationProfile from '../components/NavigationProfile'
import Header from '../components/Header';
import Account from '../components/Account';
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

// Creation of the profil page
const Profile = () => {
  if (localStorage.getItem('token')) {
    return (
      <div id="profil">
        <NavigationProfile/>
        <main className="main bg-dark">
          <Header/>
          <h2 className="sr-only">Accounts</h2>
          <Account title="Argent Bank Checking (x8349)" value="$2,082.79" description="Available Balance"/>
          <Account title="Argent Bank Savings (x6712)" value="$10,928.42" description="Available Balance"/>
          <Account title="Argent Bank Credit Card (x8349)" value="$184.30" description="Current Balance"/>
        </main>
        <Footer/>
      </div>
    )
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()
    // eslint-disable-next-line react-hooks/rules-of-hooks, no-undef
    useEffect(() => {
      navigate('/')
    })
  }
}

export default Profile