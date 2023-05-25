import React from 'react'
import '../pages/style/Main.css'
import PropTypes from 'prop-types'

const Account = ({title, value, description}) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{value}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

Account.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string
}

export default Account;