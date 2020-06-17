import Carousel from 'react-elastic-carousel'
import React from 'react'



export default function Team() {
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
                <h2>Our Team</h2>
            </div>
            <div className="container">
                <div className="row">
                <Carousel itemsToShow={2} breakPoints={breakPoints}  focusOnSelect={false} enableAutoPlay autoPlaySpeed={1500} >
                    <div className="col-lg-12 text-center" >
                        <img alt="user" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded-circle mx-auto ml-5" height="100px" width="100px" />
                        <h5 className="mt-3">Maria Cury</h5>
                        <p className="mt-1">Software Developer</p>
                    </div>

                    <div className="col-lg-12 text-center" >
                        <img alt="user" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded-circle mx-auto ml-5" height="100px" width="100px" />
                        <h5 className="mt-3">Maria Cury</h5>
                        <p className="mt-1">Software Developer</p>
                    </div>
                    <div className="col-lg-12 text-center" >
                        <img alt="user" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded-circle mx-auto ml-5" height="100px" width="100px" />
                        <h5 className="mt-3">Maria Cury</h5>
                        <p className="mt-1">Software Developer</p>
                    </div>
                    <div className="col-lg-12 text-center " >
                        <img alt="user" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded-circle mx-auto ml-5" height="100px" width="100px" />
                        <h5 className="mt-3">Maria Cury</h5>
                        <p className="mt-1">Software Developer</p>
                    </div>
                    <div className="col-lg-12 text-center" >
                        <img alt="user" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded-circle mx-auto ml-5" height="100px" width="100px" />
                        <h5 className="mt-3">Maria Cury</h5>
                        <p className="mt-1">Software Developer</p>
                    </div>
                    <div className="col-lg-12 text-center " >
                        <img alt="user" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded-circle mx-auto ml-5" height="100px" width="100px" />
                        <h5 className="mt-3">Maria Cury</h5>
                        <p className="mt-1">Software Developer</p>
                    </div>
                    <div className="col-lg-12 text-center " >
                        <img alt="user" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded-circle mx-auto ml-5" height="100px" width="100px" />
                        <h5 className="mt-3">Maria Cury</h5>
                        <p className="mt-1">Software Developer</p>
                    </div>
                    
            
           </Carousel> 
                </div>
            </div>

        </section>
    )
}
