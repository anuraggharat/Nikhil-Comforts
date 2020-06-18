import React from 'react'
import Project1 from '../../Images/project1.jpg'
import { Link } from 'react-router-dom'
export default function ProjectCard() {
    return (
        <div className="col-lg-4 col-sm-12 mt-3 ">
        <Link to="/projects/project1">
 
            <img src={Project1} alt="hello" className="img-fluid w-100" height="250"/>
            <h3 className="text-dark">Project 1</h3>
            <p className="text-muted">Lorem epsumm is a dummy text</p>
        </Link>

        </div>
    )
}
