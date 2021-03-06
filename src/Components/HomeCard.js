import React from 'react'

export default function HomeCard({imgsource,title,text}) {
    return (
        <div className="col-lg-3 col-sm-6 px-5 text-center">
        <div className="row py-2">
            <div className="col-lg-12 col-sm-12 px-4">
                <img src={imgsource} alt="Card" className="img-fluid w-75"  />
            </div>
            <div className="col-lg-12 col-sm-12 align-middle text-center mt-4">
            <h4>{title}</h4>
            </div>
        </div>
        <div className="row">
        <p className="text-muted">
        {text}

        </p>
        </div>
    </div>
    )
}
