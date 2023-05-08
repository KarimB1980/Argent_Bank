import React from 'react';
import './style/ErrorPage.css'
import NavigationProfile from '../components/NavigationProfile'
import Header from '../components/Header';

import Account from '../components/Account';

import Footer from '../components/Footer'

// Creation of the profil page
const Profile = () => {
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
}

export default Profile