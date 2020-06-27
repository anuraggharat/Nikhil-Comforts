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
            <h1 className="display-4 font-weight-bold ml-3">Publc Health Engineering</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Services(Public Health Enginnering-BMS)</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section className="py-5">
                <div className="container px-4">     
                <h1>BMS</h1>
                <p className="lead">
                A building management system (BMS) is a control system that can be used to monitor and manage the mechanical, electrical and electromechanical services in a facility. Such services can include power, heating, ventilation, air-conditioning, physical access control, pumping stations, elevators and lights.
                </p>
                <p className="lead">
                    
We help you manage your own homes and business with peace of mind so that you are in Total Security Solution. Nikhil Comforts can arrange service and maintenance agreements which are individually tailored to meet the specific requirements of each client.

                </p>
                <p className="lead">
                Our Services range from planning and designing to engineering for water supply systems for waste water and solid waste management of various categories, socio-economic and environmental studies, urban and rural sanitation, etc. Our  involvement includes every stage of project development through Feasibility Study, Preliminary Design, Due-Diligence Reports, Detailed Engineering Design including cost estimates and preparation of Technical Specifications.
                </p>
                <img src={Service1} alt="Home Imag" className="w-100" height="250px"  />   


                <div className="row mt-5">
                    <div className=" text-center col-lg-6 col-sm-12 d-flex flex-column justify-content-center">
                        <h1>Our Services</h1>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <ul>
                        <li className="lead">✓ Water supply system ENGINEERING

</li>
                        <li className="lead">
                        ✓ Distribution /Power Panels
                        </li>
                        <li className="lead">
                        ✓ Drainage system (Sewage/ Storm)
                        </li>
                        <li className="lead">
                        ✓ Pumping System/ Hydro pneumatic system    </li>
                        <li className="lead">
                        ✓ Water Treatment Plant
                        </li>
                        <li className="lead">
                        ✓ Sewage Treatment Plant
                        </li>
                        <li className="lead">
                        ✓ Effluent Treatment Plant
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
