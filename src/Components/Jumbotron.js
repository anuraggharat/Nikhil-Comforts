import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


const Example = (props) => {
  return (
    <div className="mb-0">
      <Jumbotron>
        <h1 className="display-4 font-weight-bold ">About Us</h1>
        <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
      </Jumbotron>
    </div>
  );
};

export default Example;