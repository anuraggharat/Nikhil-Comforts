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
                        <HomeCard imgsource={Img1} title="Fastest Service" text="We commit to work with passion and pursue to provide excellent results before the deadline!" />
                        <HomeCard imgsource={Img2} title="Adherence To Schedule" text="With our proven track of Project Management capabilities, we strictly follow and comply with an efficient schedule!"/>
                        <HomeCard imgsource={Img3}  title="Awesome Support" text="You will find us to be the perfect match with a solid and logistical supportive team to always be there for you!"/>
                        <HomeCard imgsource={Img4}  title="Pursuit To Excellence" text="Our belief in constant innovations and desire to excel at what we do best, keeps us upping our game!"/>
                    </div>
                </div>
        </section>
    )
}
