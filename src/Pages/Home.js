import React from 'react'
import HomeSlider from '../Components/Home/HomeSlider'
import Services from '../Components/Home/Services'
import Why from '../Components/Home/Why'
import Experience from '../Components/Home/Experience'
import Partner from '../Components/Home/Partner'

export default function Home() {
    return (
        <div>
            <HomeSlider />
            <Services />
            <Why />
            <Experience />
            <Partner />
        </div>
    )
}
