import React from 'react'
import '../pages/style/Main.css'
import PropTypes from 'prop-types'

const Card = ({title, description, icon}) => {
  return (
    <div className="feature-item">
      <img
        src={icon}
        alt="Chat Icon"
        className="feature-icon"
      />
      <h3 className="feature-item-title">{title}</h3>
      <p>
        {description}
      </p>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.string,
  titre: PropTypes.string,
  description: PropTypes.string
}

export default Card