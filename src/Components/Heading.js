import React from 'react'

export default function Heading({title}) {
    return (
        <div className="container text-first text-center">
            <h1><u>{title}</u></h1>
        </div>
    )
}
