import React from 'react'
import ParallaxContainer from '../ParallaxContainer'
import CountUp from 'react-countup';


export default function Experience() {
    return (
        <section>
            <ParallaxContainer classsource="firstparallax">
            <div className='container'>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="row">
                            <CountUp
                            start={0}
                            end={1500}
                            duration={20}
                            decimals={0}
                            delay={0}
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                            >
                            {({ countUpRef, start }) => (
                                <div>
                                <span ref={countUpRef} />
                                </div>
                            )}
                            </CountUp></div>
                        <div className="row"><h6>Projects Completed</h6></div>
                    </div>
                </div>
            </div>
            </ParallaxContainer>
        </section>
    )
}
