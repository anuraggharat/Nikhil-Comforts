import React from 'react'
import {FcServices} from 'react-icons/fc'

export default function HomeCard({children}) {
    return (
        <div className="col-lg-3 col-sm-6">
        <div className="row py-2">
            <div className="col-lg-4 col-sm-6">
                <FcServices  className="display-4"/>
            </div>
            <div className="col-lg-8 col-sm-6 align-middle text-left">
                <h4>Fastest Service</h4>
            </div>
        </div>
        <div className="row">
        Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!
        </div>
    </div>
    )
}
