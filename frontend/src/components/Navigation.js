import React from 'react';
import '../pages/style/Main.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/argentBankLogo.png'

const Navigation = () => {
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
      {
        localStorage.getItem('token') ?(
          <Link to="/profile" className="main-nav-item">          
            <i className="fa fa-user-circle"></i>
            Profile
          </Link>
        ) : (
          <Link to="/login" className="main-nav-item">          
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link> 
        )
      }      
      </div>
    </nav>
  )
}

export default Navigation