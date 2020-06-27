import React from 'react'
import Heading from '../Heading'
import Card from '../Card'
import hvac from '../../Images/hvac.jpg'
import mep from '../../Images/mep.jpg'
import energy from '../../Images/energy.jpg'
import retrofitting from '../../Images/retrofitting.jpg'
import interiors from '../../Images/interiors.jpg'
import bms from '../../Images/bms.jpg'


export default function Services() {
    return (
        <section className="bg-white py-5 px-5">
            <Heading title="Our Services" />
            <div className="container px-5">
                <div className="row px-5">
                    <div className="col-xs-12 col-lg-4">
                        <Card
                        image={hvac}
                        title="HVAC"
                        path="/hvac"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content." />                    
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Card
                        image={mep}
                        title="MEP"
                        path="/mep"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."                    
                        />                    
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Card 
                        image={interiors}
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."                    
                        path="/interiors"
                        title="Interiors"

                        />                    
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Card
                        image={energy}
                        title="Energy Consultation"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."                    
                        path="/energyconsultation"
                        />                    
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Card
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."                    
                        title="Retro Fitting"
                        path="/retrofitting"
                        image={retrofitting}
                        />                    
                    </div>
                    <div className="col-xs-12 col-lg-4">
                        <Card 
                        title="BMS"
                        image={bms}
                        path="/bms"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."                    
                        
                        />                    
                    </div>
                </div>
            </div>
        </section>
    )
}
