import React from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem } from 'reactstrap'
import BlogCard from '../Components/Blogs/BlogCard'

export default function Blogs() {
    return (
        <div className="mt-5">
            <Jumbotron title="About Us">
          <h1 className="display-4 font-weight-bold ml-3">Company News</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Blogs</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />

                        </div>
                        <div className="col-lg-4 col-sm-12"></div>

                    </div>
                </div>
            </section>
        </div>
    )
}
