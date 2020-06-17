import React from 'react'

export default function BlogCard() {
    return (
        <div className="row mt-5">
            <div className="col-lg-5">
                <img className="img-fluid" alt="Blog1" src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            </div>
            <div className="col-lg-7">
                <h4>Lorem Epsum is a dummy text</h4>
                <div className="w-100">
                    <p className="text-muted"><span className="text-info mr-3">Lorem Epsum</span>March 22 2017</p>
                </div>
                <div className="w-100">
                <p>Lorem Ipsum is imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                <p className="text-primary">Continue Reading..</p>
                </div>
            </div>

        </div>
    )
}
