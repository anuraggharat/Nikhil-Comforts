import React from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Aboutimg1 from '../Images/aboutimg1.JPG'
import Aboutimg2 from '../Images/aboutimg2.jpg'
import Aboutimg3 from '../Images/aboutimg3.jpg'
import Team from '../Components/About/Team'
import QuoteBox from '../Components/QuoteBox'


export default function Aboutus() {
    return (
        <div className="pt-5">
          <Jumbotron title="About Us">
          <h1 className="display-4 font-weight-bold ml-3">About Us</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>About us</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
          <section>
            <div className="container py-5">
              <div className="row py-5">
                <div className="col-lg-6 col-sm-12 p-4 d-flex justify-content-center py-5">
                <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen title="About Us"></iframe>
                </div>
                </div>
                <div className="col-lg-6 col-sm-12 p-4">
                  <h2>Our Story</h2>
                  <p className="mt-4 text-muted"> Nikhil Comforts is a multi-disciplinary engineering contracting organization which has been operating in India since 1991. The organization is based in Mulund, Mumbai.
We started off as HVAC contractors in 1991 as a dealer for Carrier Aircon and in our first year of establishment, we did a business of INR 20 lakhs. By 1995, we attained a height of 1 Crore annual turnover and by the year 2000, our annual turnover soared to 2.2 Crores!
</p>
<p className="mt-4 text-muted">
In order to be the one stop solution provider, Nikhil Comforts started Electrical contracting in the year 2008.Since inception, Nikhil Comforts has won numerous awards for its sales and services. Nikhil Comforts boasts of being amongst the Elite Carrier Willis. Currently Nikhil Comforts is operating as a multi-disciplinary contracting firm. Executing HVAC, Electrical, Plumbing, Fire-fighting and Interiors projects. The current turnover is around INR 50 Crores!
</p>
                  <div className="row">
                    <div className="col-lg-4">
                      <h1>1500</h1>
                      <p className="text-muted">PROJECTS COMPLETED</p>
                    </div>
                    <div className="col-lg-4">
                      <h1>21 Years</h1>
                      <p className="text-muted">OF DEEP EXPERIENCE</p>
                    </div>
                    <div className="col-lg-4">
                      <h1>100+</h1>
                      <p className="text-muted">CLIENTS SERVED</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="row mt-3">
                <div className="col-lg-6 p-4">
                  <h1>Our Mission Values</h1>
                  <p className="mt-4 text-muted">We believe in embracing change to stimulate creativity and ingenuity that is central to bringing new products and services for our clients. Our business has been built on unwavering commitment to deliver quality projects, on time and within allotted budgets. We offer our clients the latest technologies and methodologies, as well as a flexible approach to contracting structures.</p>
                  <p className="mt-4 text-muted">
                  We focus on results, act with ambition to be operationally competitive. We are backed by highly experienced and qualified Project Managers, engineers and  supervisors. We offer an integrated suite of services right from the concept to commissioning
                  </p>
                  <h1 className="mt-5">Why Choose Us?</h1>
                  <ul className="m-0 p-0">
                    <li className="mb-3">Commitment to work with Passion
</li><li className="mb-3"> Adherence to Schedule
</li><li className="mb-3">Belief in constant innovations</li><li className="mb-3">Personal credentials & Pursuit to excellence</li><li>Design capabilities & Project Management capabilities</li>
                  <li className="mb-3">Proven track record</li>
                  </ul>
   
                </div>
                <div className="col-lg-6 p-4">
                  <div className="row">
                  <img src={Aboutimg1} alt="Qulaity " className="img-fluid " />
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <img src={Aboutimg2} height="200px" alt="about  2" className="w-100" />
                    </div>
                    <div className="col-lg-6">
                      <img src={Aboutimg3} alt="about  3" height="200px" className="w-100"/>
                    </div>
                  </div>
                </div>
             </div>
             <div className="row mt-5">
               <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center">
<h1>
OUR SAFETY AND ENVIRONMENTAL POLICY
</h1>
               </div>
               <div className="col-lg-6 col-sm-12">
                 <ul>
                   <li className="mb-3">✓ Occupational Health and Safety is a priority for Nikhil Comforts.</li>
                   <li className="mb-3">✓ We are committed to provide a safe, healthy and positive working environment for our employees and those under our care</li>
                   <li className="mb-3">✓ Our team is equipped with safety helmets, safety gloves, safety belts, safety jackets, goggles etc</li>
                   <li className="mb-3">✓ We adhere to a strict environmental policy that ensures we comply with all relevant environmental laws and regulations.</li>
                   <li className="mb-3">✓ We take all practicable steps to prevent pollution in our activities, and conserve resources through the efficient use of energy and materials.</li>
                 </ul>
               </div>
             </div>
             <div className="row mt-5">
             <div className="col-lg-6 col-sm-12">
                 <ul>
                   <li className="mb-3">✓ Quality Management is central to all the activities carried out by us.</li>
                   <li className="mb-3">✓ We endeavor to provide our clients with a truly professional approach to project delivery.</li>
                   <li className="mb-3">✓ It is our policy to provide superior service to our clients by understanding and responding to their needs and expectations.
</li>
                   <li className="mb-3">✓ We systematically manage our projects to maximise value for all 
</li>
                 </ul>
               </div>
               <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center">
<h1>
OUR QUALITY POLICY : 
</h1>
               </div>
               
             </div>
            </div>
          </section>
          <Team />
          <QuoteBox />
        </div>
    )
}
