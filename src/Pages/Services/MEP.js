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
            <h1 className="display-4 font-weight-bold ml-3">MEP</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Services(MEP)</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section className="py-5">
                <div className="container px-4">     
                <h1>MEP</h1>
                <p className="lead">
                From firefighting and basic mechanical arrangement to Electrical or plumbing Job we know it best to get it done peacefully for you!
                </p>
                <p className="lead">
                We provide high quality, cost effective and time bound mechanical electrical and plumbing (MEP) engineering services using latest developments. In fact, we make your working and interacting experience with us different from other consultants as we are able to provide all services in-house. Our engineering team comprises of highly qualified Electrical engineers, MEP co-ordinating engineers, Plumbing and Fire Fighting designers supported by talented draftsmen.
                </p>
                <img src={Service1} alt="Home Imag" className="w-100" height="250px"  /> 

                <div className="row mt-5">
                    <div className=" text-center col-lg-6 col-sm-12 d-flex flex-column justify-content-center">
                        <h1>Our Services</h1>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <ul>
                        <li className="lead">✓ Hydrants
</li>
                        <li className="lead">
                        ✓ Chilled Water System (air cooled/water cooled)
                        </li>
                        <li className="lead">
                        ✓ Wet Sprinklers
                        </li>
                        <li className="lead">
                        ✓ Pumping/piping systems
                        </li>
                        <li className="lead">
                        ✓ Pre-action systems
                        </li>
                        <li className="lead">
                        ✓ Medium velocity system
                        </li>
                        <li className="lead">
                        ✓ High velocity system
                        </li>
                        <li className="lead">
                        ✓ Hand appliances
                        </li>
                        <li className="lead">
                        ✓ Industrial Piping
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
