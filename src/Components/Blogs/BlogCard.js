import React from 'react'
import { Link } from 'react-router-dom'
import {API_URL} from '../../API/Url'


export default function BlogCard({blog}) {
    
    const {uploadDate}= blog
    const d=new Date(uploadDate)
    return (
        <div className="row mt-5">
            <div className="col-lg-5">
                <img className="w-100" height="250" alt="Blog1" src={`${API_URL}/getfile/${blog.image_path}`} />
            </div>
            <div className="col-lg-7">
                <h4>{blog.title}</h4>
                <div className="w-100">
                <p className="text-muted"><span className="text-info mr-3">{blog.subtitle}</span>{d.toDateString()}</p>
                </div>
                <div className="w-100">
                <p className="blog-card-text">{blog.blog_content.substring(0,300)}</p>
                <p className="text-primary"><Link className="text-primary"   to={{pathname:`/blogs/${blog.title}`,blog:blog}}>Continue Reading..</Link></p>
                </div>
            </div>

        </div>
    )
}
