
import "./Card.css"
import React from 'react'

const Card = ({ name, number, position, photo }) => {
  return (
    <div className="card">
      <img src={photo} alt="photo" />
      <div className="background">
        <div className="text">
          <h1 className="name">{name}</h1>
          <h3 className="number">{number}</h3>
          <p className="position">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default Card