import React from 'react'
import HomeSlider from '../Components/Home/HomeSlider'
import Services from '../Components/Home/Services'
import Why from '../Components/Home/Why'
import Experience from '../Components/Home/Experience'
import Partner from '../Components/Home/Partner'
// import Testimonials from '../Components/Home/Testimonials'
import Brands from '../Components/Home/Brands'
import Statement from '../Components/Home/Statement'

export default function Home() {
    return (
        <div>
            <HomeSlider />
            <Services />
            <Why />
            <Experience />     
            {/* <Testimonials /> */}
            <Brands />
            <Statement />
            <Partner />

        </div>
    )
}
