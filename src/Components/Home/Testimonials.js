import Carousel from 'react-elastic-carousel'
import React from 'react'
import Heading from '../Heading'
import pic1 from '../../Images/pic1.png'
import pic2 from '../../Images/pic2.png'
import pic3 from '../../Images/pic3.jpg'
import pic4 from '../../Images/pic4.png'
import pic5 from '../../Images/pic5.png'
import TestimonialCard from './TestimonialCard'


export default function Testimonials() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 3 },
        { width: 1750, itemsToShow: 3 },
      ]
    return (
        <section className="p-5">
            <Heading title="Client Testimonails" />
            <div className="container text-center p-5 text-muted">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
            </div>
            <div className="container mt-5">
                <div className="container p-5">
                <Carousel itemsToShow={3} breakPoints={breakPoints} itemPadding={[10, 30]}  enableAutoPlay autoPlaySpeed={1500} className="h-100">
                    {/* <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    
                    
                    <TestimonialCard /> */}
                <div className="bg-light center pt-2 h-100">
                <img className="rounded-circle testimonial-image mx-auto d-flex" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="user image"/>
                <h6>Martina Heins</h6>
                <p>Lorem Epsum</p>
                <p>Lorem Ipsum is imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
        </div>
        <div className="bg-light center pt-2 h-100">
                <img className="rounded-circle testimonial-image mx-auto d-flex" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="user image"/>
                <h6>Martina Heins</h6>
                <p>Lorem Epsum</p>
                <p>Lorem Ipsum is imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
        </div>
        <div className="bg-light center pt-2 h-100">
                <img className="rounded-circle testimonial-image mx-auto d-flex" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="user image"/>
                <h6>Martina Heins</h6>
                <p>Lorem Epsum</p>
                <p>Lorem Ipsum is imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
        </div>
                
                </Carousel> 
                </div>
            </div>

        </section>
    )
}
