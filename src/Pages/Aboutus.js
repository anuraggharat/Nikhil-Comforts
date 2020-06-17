import React from 'react'
import Jumbotron from '../Components/Jumbotron'
import Aboutimg1 from '../Images/aboutimg1.JPG'
import Aboutimg2 from '../Images/aboutimg2.jpg'
import Aboutimg3 from '../Images/aboutimg3.jpg'
import Team from '../Components/About/Team'
import QuoteBox from '../Components/QuoteBox'


export default function Aboutus() {
    return (
        <div className="pt-5">
          <Jumbotron />
          <section>
            <div className="container py-5">
              <div className="row py-5">
                <div className="col-lg-6 col-sm-12 p-4">
                <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
                </div>
                <div className="col-lg-6 col-sm-12 p-4">
                  <h2>Our Story</h2>
                  <p className="mt-4 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and .</p>
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
                  <p className="mt-4 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and .</p>
                  <h1>Our Quality Policy</h1>
                  <p className="mt-4 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and .</p>
                  <p className="mt-4 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and .</p>

                </div>
                <div className="col-lg-6 p-4">
                  <div className="row">
                  <img src={Aboutimg1} alt="Qulaity " className="img-fluid " />
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <img src={Aboutimg2} height="200px" alt="about image 2" className="w-100" />
                    </div>
                    <div className="col-lg-6">
                      <img src={Aboutimg3} alt="about image 3" height="200px" className="w-100"/>
                    </div>
                  </div>
                </div>
             </div>
            </div>
          </section>
          <Team />
          <QuoteBox />
        </div>
    )
}
