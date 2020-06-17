import React from 'react'
import Heading from '../Heading'
import HomeCard from '../HomeCard'
import Img2 from '../../Images/Adherence_to_schedule.svg'
import Img3 from '../../Images/Awesome_Support.svg'
import Img1 from '../../Images/Fastest_Service.svg'
import Img4 from '../../Images/Persuit_to_Excellence.svg'

export default function Why() {
    return (
        <section className="bg-light p-5">
                <Heading title="Why Choose Us?" />
                <div className="container p-5">
                    <div className="row px-5">
                        <HomeCard imgsource={Img1} title="Fastest Service" />
                        <HomeCard imgsource={Img2} title="Adherence To Schedule"/>
                        <HomeCard imgsource={Img3}  title="Awesome Support"/>
                        <HomeCard imgsource={Img4}  title="Pursuit To Excellence"/>
                    </div>
                </div>
        </section>
    )
}
