import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesCard({imagesource}) {
    return (
        <div className="col-lg-4 col-sm-12 px-4 mt-4">
            <img className="w-100" src={imagesource} height="200px" alt="Servve"></img>
            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>
            <Link to="/" className="mt-0">Learn More</Link>
        </div>
    )
}
