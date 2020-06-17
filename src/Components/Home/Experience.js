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
                        <div className="row text-left text-second">
                            <CountUp
                            start={0}
                            end={1500}
                            duration={5}
                            decimals={0}
                            delay={0}
                            >
                            {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 ref={countUpRef} className="display-3 font-weight-bolder">.</h1>
                            </VisibilitySensor>

                            )}
                            </CountUp></div>
                        <div className="text-left"><h4>Projects Completed</h4></div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="row text-second">
                            <CountUp
                            start={0}
                            end={21}
                            duration={5}
                            decimals={0}
                            delay={0}
                            
                            >
                            {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <h1 ref={countUpRef}  className="display-3 font-weight-bolder">.</h1>
                            </VisibilitySensor>

                            )}
                            </CountUp></div>
                        <div className="text-left"><h4>Years Of Experience</h4></div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="row text-second">
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
                                <h1 ref={countUpRef} className="display-3 font-weight-bolder">.</h1>
                            </VisibilitySensor>

                            )}
                            </CountUp></div>
                        <div className="text-left"><h4>Clients Served</h4></div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="row text-second">
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
                                <h1 ref={countUpRef} className="display-3 font-weight-bolder">.</h1>
                            </VisibilitySensor>

                            )}
                            </CountUp></div>
                        <div className="text-left"><h4>Cities Served </h4></div>
                    </div>
                </div>
            </div>
            </ParallaxContainer>
        </section>
    )
}
