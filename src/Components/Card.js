import React from 'react'

export default function Card() {
    return (
<div className="card mt-5" >
  <img className="card-img-top" src='https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt="Card image cap" />
  <div className="card-body bg-first text-white text-left p-2">
      <h3 className="card-title">HVAC</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    )
}
