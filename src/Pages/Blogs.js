import React, { useState, useEffect } from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem ,ListGroup, ListGroupItem,Badge  } from 'reactstrap'
import BlogCard from '../Components/Blogs/BlogCard'
import {getBlogs} from '../API/Blogs'
import { Spinner } from 'reactstrap';


export default function Blogs() {


    const[data,setData] = useState([])
    const [loading,setLoading]=useState(true)


    const fetchBlogs=()=>{
        getBlogs()
        .then(response=>{
            // console.log(response)
            if(response.success){
                setData(response.data)
            }
            else{
                console.log(response.message)
            }
        })
        .catch(error=>(console.log(error)))
        .finally(()=>setLoading(false))
    }

    useEffect(()=>{
        fetchBlogs()
    },[])


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
                        {loading ? 
                        (
                            <div className="col-lg-9 col-sm-12 text-center pt-5">
                            <Spinner style={{ width: '5rem', height: '5rem' }} type="grow" color="primary" />
                            </div>
                            ):(
                            <div className="col-lg-9 col-sm-12">
                            {data.map((item)=>(
                                <BlogCard blog={item} key={item._id} />
                            )
                                
                            )}
                        </div>
                        )}
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
                                <ListGroupItem className="justify-content-between">Dapibus ac <Badge pill>2</Badge></ListGroupItem>
                                <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
                                <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
                                <ListGroupItem className="justify-content-between">Dapibus ac <Badge pill>2</Badge></ListGroupItem>
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
