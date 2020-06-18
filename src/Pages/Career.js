import React from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import Avatar from '../Images/avatar.jpg'

export default function Career() {
    return (
        <div className="pt-5">
             <Jumbotron>
            <h1 className="display-4 font-weight-bold ml-3">Career</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Career</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-6 col-sm-12">
                        <h1>Career at Nikhil Comforts</h1>
                        <p>We believe that customers are the foundation of a successful business and we want to enable every team to deliver moments of wow to them.</p>
                        <p>We believe that customers are the foundation of a successful business and we want to enable every team to deliver moments of wow to them.</p>
                        <p>We believe that customers are the foundation of a successful business and we want to enable every team to deliver moments of wow to them.</p>
                        
                        <p>We believe that customers are the foundation of a successful business and we want to enable every team to deliver moments of wow to them.</p>
                        
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img alt="Career" className="img-fluid" src="https://images.pexels.com/photos/288477/pexels-photo-288477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <h2>Open Job Positions</h2>
                </div>
                <div className="row pb-5 pt-3" >
                    <div className="col-lg-4 p-2">
                    <Card className="border-1 text-center">
                    <CardImg top width="200px" height="200px" className="rounded-circle " src={Avatar} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Software Developer</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="success" outline>Apply Now</Button>
                    </CardBody>
                    </Card>
                    </div>
                    
                    <div className="col-lg-4 p-2">
                    <Card className="border-1 text-center">
                    <CardImg top width="200px" height="200px" className="rounded-circle " src={Avatar} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Software Developer</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="success" outline>Apply Now</Button>
                    </CardBody>
                    </Card>
                    </div>
                    
                    <div className="col-lg-4 p-2">
                    <Card className="border-1 text-center">
                    <CardImg top width="200px" height="200px" className="rounded-circle " src={Avatar} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Software Developer</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="success" outline>Apply Now</Button>
                    </CardBody>
                    </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}
