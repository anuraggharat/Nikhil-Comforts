import React from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default function Blog(props) {
    console.log('====================================');
    console.log(props.location.blog);
    console.log('====================================');
    const blog=props.location.blog
    const d=new Date(blog.uploadDate)

    return (
        <div className=" pt-5">
            <Jumbotron>
            <h1 className="display-4 font-weight-bold ml-3">Blog</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="/blogs">All Blogs</a></BreadcrumbItem>
                <BreadcrumbItem active>Lorem Epsum</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section>
                <div className="container">
                    <div className="row">
                    <h1>{blog.title}</h1>
                    </div>
                    <div className="row">
                    <p className="text-muted">From - <span className="text-success">{blog.posted_by}</span></p>
                    <p className="ml-auto text-muted">{d.toDateString()}</p>
                    </div>
                    <div className="row">
                        <div className="container text-center">
                        <img src={`http://localhost:4200/api/getfile/${blog.image_path}`} alt="BLogphoto" className="w-75 h-100 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-4 text-muted">
                        <h4>Lorem epsum Subtitle</h4>
                        {/* <p>{blog.blog_content}</p> */}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p><br/>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="row">
        <blockquote className="font-italic ml-auto">
        -Written By {blog.article_by}
        </blockquote>
                    </div>
                </div>
            </section>
        </div>
    )
}
