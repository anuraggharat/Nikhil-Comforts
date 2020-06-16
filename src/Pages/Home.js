import React from 'react'
import HomeSlider from '../Components/Home/HomeSlider'
import Services from '../Components/Home/Services'
import Why from '../Components/Home/Why'
import Experience from '../Components/Home/Experience'

export default function Home() {
    return (
        <div>
            <HomeSlider />
            <Services />
            <Why />
            <Experience />
        </div>
    )
}
