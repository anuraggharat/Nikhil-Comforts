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
            <h1 className="display-4 font-weight-bold ml-3">Interiors</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Services(Interiors)</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section className="py-5">
                <div className="container px-4">     
                <h1>Interiors</h1>
                <p  className="lead">
                    
Solutions ranging from clean air to purified water by using state of art installations of equipment in your premise.

                </p>
                <p className="lead">
                With a work timeline spanning over 25 years, our interior projects serve full services interior design specializing in residential, commercial and industrial work spaces. Our work consists of end-to-end design and detailing solutions for all your interior designs and fit out needs.
                </p>
                <p className="lead">
                We believe that great design is the outcome of simplified thinking and an uncanny attention to detailing within the design.
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
                        ✓ Civil Work includes Brick / Siporex Wall & Plastering
                        </li>
                        <li className="lead">
                        ✓ PCC Screeding and Tiling & Dado work
                        </li>
                        <li className="lead">
                        ✓ Granite / Marble counter work                        </li>
                        <li className="lead">
                        ✓ Plaster of Paris finishing and Painting
                        </li>
                        <li className="lead">
                        ✓ False Ceiling (Gypsum / Modular Type)
                        </li>
                        <li className="lead">
                        ✓ Partitions (Glass / Solid / Gypsum)
                        </li>
                        <li className="lead">
                        ✓ ACP Cladding and Glass Façade
                        </li>
                        <li className="lead">
                        ✓ Fire rated doors for critical IT / Server rooms
                        </li><li className="lead">
                        ✓ Laminate / Veneer Paneling, Storage, Trapdoors, Tables
                        </li><li className="lead">
                        ✓ Modular Workstations / Cubicle
                        </li>
                        <li className="lead">
                        ✓ Curtains, Wallpapers and Blind
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
