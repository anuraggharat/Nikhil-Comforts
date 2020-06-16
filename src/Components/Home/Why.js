import React from 'react'
import Heading from '../Heading'
import HomeCard from '../HomeCard'
export default function Why() {
    return (
        <section className="bg-light p-5">
                <Heading title="Why Choose Us?" />
                <div className="container p-5">
                    <div className="row px-5">
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                        <HomeCard />
                    </div>
                </div>
        </section>
    )
}
