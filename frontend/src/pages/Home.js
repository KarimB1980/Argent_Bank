// import React, { useState, useEffect } from 'react'
import React from 'react'
import './style/Main.css'

import Card  from '../components/Card'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import Chat from '../assets/img/icon-chat.png'
import Money from '../assets/img/icon-money.png'
import Security from '../assets/img/icon-security.png'

// Creation of the homepage
const Home = () => {
  return (
    <section>
      <Navigation/>
      <main>
        <Hero/>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Card icon={Chat} title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
          <Card icon={Money} title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!"/>
          <Card icon={Security} title="Security you can trust" description=" We use top of the line encryption to make sure your data and money is always safe."/>
        </section>
      </main>
      <Footer/>
    </section>
  )
}

export default Home