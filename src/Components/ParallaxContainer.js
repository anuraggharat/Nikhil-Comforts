import React from 'react'

export default function ParallaxContainer({classsource,children}) {
    return (
        <div className={classsource}>
            <div className="overlay">
            {children}
            </div>
        </div>
    )
}
