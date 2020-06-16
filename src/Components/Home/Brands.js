import Carousel from 'react-elastic-carousel'
import React from 'react'
import pic1 from '../../Images/pic1.png'
import pic2 from '../../Images/pic2.png'
import pic3 from '../../Images/pic3.jpg'
import pic4 from '../../Images/pic4.png'
import pic5 from '../../Images/pic5.png'


export default function Brands() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 850, itemsToShow: 4 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 4 },
        { width: 1750, itemsToShow: 4 },
      ]
    return (
        <section className="pb-5"> 
            <div className="container text-center p-5">
                <h2>Brands we have worked with!</h2>
            </div>
            <div className="container">
                <div className="container">
                <Carousel itemsToShow={2} breakPoints={breakPoints} itemPadding={[10, 50]}  enableAutoPlay autoPlaySpeed={1500}>
           <img src={pic3} className="brands-img img-fluid "></img>
           <img src={pic3} className="brands-img img-fluid "></img>
           <img src={pic3} className="brands-img img-fluid "></img>
           <img src={pic3} className="brands-img img-fluid "></img>
           <img src={pic3} className="brands-img img-fluid "></img>
            <img src={pic3} className="brands-img img-fluid "></img>
           </Carousel> 
                </div>
            </div>

        </section>
    )
}
