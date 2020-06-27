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
            <h1 className="display-4 font-weight-bold ml-3">Energy Consultation</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Services(Energy Consultation)</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section className="py-5">
                <div className="container px-4">     
                <h1>Energy Consultation</h1>
                <p className="lead">Sustainability is one of the core agenda in the present day and that is where our expert team fits in to enable you to use less energy and GO GREEN!</p>
                <p className="lead">At Nikhil Comforts, we have long developed a team of experts who know every bit of information about energy preservation and its consumption. We help our clients improve and sustain facility operations by designing and implementing automated systems that protect assets and operate facilities with maximum efficiency. Building automation systems lead to decreased downtime, reduced tenant complaints and higher tenant retention.</p>
                
                <img src={Service1} alt="Home Imag" className="w-100" height="250px"  />  


                <div className="row mt-5">
                    <div className=" text-center col-lg-6 col-sm-12 d-flex flex-column justify-content-center">
                        <h1>Our Services</h1>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <ul>
                        <li className="lead">✓ HT/LT Distribution
</li>
                        <li className="lead">
                        ✓ Distribution /Power Panels
                        </li>
                        <li className="lead">
                        ✓ Distribution Boards / Switchgears
                        </li>
                        <li className="lead">
                        ✓ Light / Power point / UPS point wiring       </li>
                        <li className="lead">
                        ✓ Raceways / Cable Trays /GI Trunk etc.
                        </li>
                        <li className="lead">
                        ✓ Light Fixtures / Switch Sockets
                        </li>
                        <li className="lead">
                        ✓ Partitions (Glass / Solid / Gypsum)
                        </li>
                        <li className="lead">
                        ✓ Chemical/Bore Earthing etc.
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
