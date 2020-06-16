import React from 'react'
import ParallaxContainer from '../ParallaxContainer'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

export default function Experience() {
    return (
        <section>
            <ParallaxContainer classsource="firstparallax">
            <div className='container p-5 text-center text-white'>
                <div className="row p-5">
                    <div className="col-lg-3 col-sm-6">
                        <div className="row text-center text-primary">
                            <CountUp
                            start={0}
                            end={1500}
                            duration={5}
                            decimals={0}
                            delay={0}
                            >
                            {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 ref={countUpRef}></h1>
                            </VisibilitySensor>

                            )}
                            </CountUp></div>
                        <div className="row"><h6>Projects Completed</h6></div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="row text-primary">
                            <CountUp
                            start={0}
                            end={21}
                            duration={5}
                            decimals={0}
                            delay={0}
                            >
                            {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 ref={countUpRef}>YEARS</h1>
                            </VisibilitySensor>

                            )}
                            </CountUp></div>
                        <div className="row"><h6>Of Experience</h6></div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="row text-primary">
                            <CountUp
                            start={0}
                            end={100}
                            duration={5}
                            decimals={0}
                            delay={0}
                            suffix="+"
                            >
                            {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 ref={countUpRef}></h1>
                            </VisibilitySensor>

                            )}
                            </CountUp></div>
                        <div className="row"><h6>Clients Served</h6></div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="row text-primary">
                            <CountUp
                            start={0}
                            end={10}
                            duration={5}
                            decimals={0}
                            delay={0}
                            suffix="+"
                            >
                            {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 ref={countUpRef}>+</h1>
                            </VisibilitySensor>

                            )}
                            </CountUp></div>
                        <div className="row"><h6>Cities Served </h6></div>
                    </div>
                </div>
            </div>
            </ParallaxContainer>
        </section>
    )
}
