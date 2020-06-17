import React from 'react'
import Heading from '../Heading'
import Card from '../Card'

export default function Services() {
    return (
        <section className="bg-white py-5 px-5">
            <Heading title="Our Services" />
            <div className="container px-5">
                <div className="row px-5">
                    <div className="col-xs-12 col-lg-4">
                        <Card />                    
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Card />                    
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Card />                    
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Card />                    
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Card />                    
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Card />                    
                    </div>
                </div>
            </div>
        </section>
    )
}
