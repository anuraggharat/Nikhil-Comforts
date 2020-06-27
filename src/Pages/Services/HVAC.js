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
            <h1 className="display-4 font-weight-bold ml-3">HVAC</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Services(HVAC)</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section className="py-5 container">
                <div className="container px-4">     
                <h1>HVAC</h1>
                <p className="lead">Air Conditioning and ventilation design of commercial as well as residential places is our core business that we have been successfully pursuing since the last 25+ years!</p>
                <p  className="lead">We, at Nikhil Comforts, have the infrastructure and technical capability to handle projects with various challenges such as comfort cooling systems, close control systems for critical data centres & labs, clean rooms, process cooling, pressurization, ventilation and exhaust systems.</p>
                <p  className="lead">Our team has the required proficient expertise in engineering, execution and service of high performance buildings with sustainable solutions using variable water, variable air and variable refrigerant flow systems complemented by a Building Management System.</p>
                <img src={Service1} alt="Home Imag" className="w-100" height="250px"  />     
                
                <div className="row mt-5">
                    <div className=" text-center col-lg-6 col-sm-12 d-flex flex-column justify-content-center">
                        <h1>Our Services</h1>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <ul>
                        <li className="lead">✓ Air Distribution system C</li>
                        <li className="lead">
                        ✓ Chilled Water System (air cooled/water cooled)
                        </li>
                        <li className="lead">
                        ✓ DX splits
                        </li>
                        <li className="lead">
                        ✓ VRV/VRF
                        </li>
                        <li className="lead">
                        ✓ Heating
                        </li>
                        <li className="lead">
                        ✓ Ventilation
                        </li>
                        <li className="lead">
                        ✓ Precision Air conditioning
                        </li>
                        <li className="lead">
                        ✓ Insulation Work
                        </li>

                    </ul>
                    </div>
                </div>
                
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
