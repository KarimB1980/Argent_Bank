import React from 'react';
import '../pages/style/Main.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/argentBankLogo.png'
import { accountService } from '../_service/AccountService'
import { useSelector } from 'react-redux'

const NavigationProfile = () => {
  const { firstName } = useSelector((state) => state.profile)

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/profile" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </Link>
        <Link to="/" className="main-nav-item" onClick={() => accountService.logout()}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </nav>
  )
}

export default NavigationProfile