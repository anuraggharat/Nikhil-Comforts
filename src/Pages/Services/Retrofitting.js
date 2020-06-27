import React from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem  } from 'reactstrap'
import Service1 from '../../Images/service1.jpg'
import Service2 from '../../Images/service2.jpg'
import Service3 from '../../Images/services3.jpg'
import ServicesCard from '../../Components/Services.js/ServicesCard'
import QuoteBox from '../../Components/QuoteBox'

export default function Services() {
    return (
        <div className="pt-5">
            <Jumbotron>
            <h1 className="display-4 font-weight-bold ml-3">Retro Fitting</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Services(Retro-Fitting)</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section className="py-5">
                <div className="container px-4">     
                <h1>Retro-Fitting</h1>
                <p className="lead">Refurbishing the existing sites with a newer set of consumables and equipment which are energy efficient and enable you to comply with Leeds certification.</p>
                <p className="lead">
                    
Nikhil Comforts undertakes retrofit projects for ageing installations to increase their lifecycle. The retrofit team has the experience in completing complex upgradation and replacement works for various workplaces and residentials. The retrofit team takes meticulous care in ensuring that day to day operations are not affected and is adept at proposing solutions which ensure minimum downtime of equipment.

                </p>
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
