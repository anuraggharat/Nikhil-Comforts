import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
<div className="card border-0 shadow-lg mt-5" >
<Link to={props.path}>  <img className="w-100" height="200px" src={props.image} alt="Card  cap" /></Link>
  <div className="card-body bg-first text-white text-left p-2">
      <h3 className="card-title">{props.title}</h3>
    <p className="card-text">{props.text}</p>
  </div>
</div>
    )
}
