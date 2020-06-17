import React from 'react'
import { Button } from 'reactstrap'

export default function QuoteBox() {
    return (
        <section className="p-5 bg-light">
            <div className="container">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>A design Team of 25+ Peeple,execution engineers make any HVAC jobs of yours possible.</h3>
                        </div>
                        <div className="col-lg-4 align-middle pt-3">
                            <Button color="success" className="px-4">GET A QUOTE</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
