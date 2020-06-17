import React from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem,Button, ButtonGroup  } from 'reactstrap'
import ProjectCard from '../Components/Projects/ProjectCard'
import QuoteBox from '../Components/QuoteBox'



export default function Projects() {
    return (
        <div className="pt-5">
            <Jumbotron>
            <h1 className="display-4 font-weight-bold ml-3">Projects</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Projects</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section className="p-5">
                <div className="container px-5">
                    <div className="row pr-3">
                    <ButtonGroup className="ml-auto">
                    <Button color="light" >ALL</Button>
                    <Button color="light" >HVAC</Button>
                    <Button color="light" >MEP</Button>
                    <Button color="light" >INTERIORS</Button>
                    <Button color="light" >PHE</Button>
                    <Button color="light" >MBS</Button>
                    <Button color="light" >FIREFIGHTING</Button>
                    </ButtonGroup>
                    </div>
                    <div className="row mt-5">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </section>
            <QuoteBox />
        </div>
    )
}
