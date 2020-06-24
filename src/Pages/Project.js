import React from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem} from 'reactstrap'
import Project1 from '../Images/project1.jpg'
import Service2 from '../Images/service2.jpg'
import Service3 from '../Images/services3.jpg'


export default function Project(props) {
    const {title,image,uploadDate} = props.location.project
    const d = new Date(uploadDate)
    return (
        <div className="pt-5">
            <Jumbotron>
    <h1 className="display-4 font-weight-bold ml-3">{title}</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="/projects">All Projects</a></BreadcrumbItem>
    <BreadcrumbItem active>{title}</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section>
                <div className="container">
                    <div className="row">
    <h1>{title}</h1>
                    </div>
                    <div className="row">
                            <img className="w-75 h-75" src={image} alt="project1" />
                    </div>
                    <div className="row">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="row pb-5">
                        <div className="col-lg-4 col-sm-12">
                            <img src={Service3} alt='first' className="img-fluid" height="300" />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <img src={Service2} alt='first' className="img-fluid" height="300"/>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <img src={Service3} alt='first' className="img-fluid" height="300"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
