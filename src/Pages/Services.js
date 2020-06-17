import React from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem  } from 'reactstrap'
import Service1 from '../Images/service1.jpg'
import Service2 from '../Images/service2.jpg'
import Service3 from '../Images/services3.jpg'
import ServicesCard from '../Components/Services.js/ServicesCard'
import QuoteBox from '../Components/QuoteBox'


export default function Services() {
    return (
        <div className="pt-5">
            <Jumbotron>
            <h1 className="display-4 font-weight-bold ml-3">Services</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Services</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section className="py-5">
                <div className="container px-4">     
                <h1>HVAC</h1>
                <p className="mt-4 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and .</p>
                <img src={Service1} alt="Home Imag" className="w-100" height="250px"  />     
                <div className="row mt-5">
                    <ServicesCard imagesource={Service1} />
                    <ServicesCard imagesource={Service2} />
                    <ServicesCard imagesource={Service3} />
                </div>
                </div>
            </section>
            <QuoteBox />
        </div>
    )
}
