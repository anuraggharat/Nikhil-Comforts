import React from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem ,ListGroup, ListGroupItem,Badge  } from 'reactstrap'
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
                <div className="container pb-3">
                    <div className="row">
                        <div className="col-lg-9 col-sm-12">
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                        </div>
                        <div className="col-lg-3 col-sm-12 pt-5">
                            <h2>Categories</h2>
                            <ListGroup flush>
                            <ListGroupItem  tag="a" href="#">Cras justo odio</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
                            </ListGroup>
                            <div className=" advertisement ">
                                <div className="overlay pt-5">
                                <p className="align-middle">Lorem epsum is a dummy text</p>
                                <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h2>Archives</h2>
                            <ListGroup flush>
                            <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
                            
                            </ListGroup>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
