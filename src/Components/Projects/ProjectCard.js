import React from 'react'
import Project1 from '../../Images/project1.jpg'
import { Link } from 'react-router-dom'
import {API_URL} from '../../API/Url'

export default function ProjectCard({project}) {
    console.log(project)
    return (
        <div className="col-lg-4 col-sm-12 mt-3 ">
        <Link  to={{pathname:`/projects/${project.title}`,project:project}} >
 
            <img src={`${API_URL}/getfile/${project.image_path}`} alt="hello" className=" w-100" height="250"/>
            <h3 className="text-dark">{project.title}</h3>
            <p className="text-muted">Lorem epsumm is a dummy text</p>
        </Link>

        </div>
    )
}
