import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


const Example = (props) => {
  return (
    <div className="mb-0 pb-0">
      <Jumbotron>
        <h1 className="display-4 font-weight-bold ml-3">About Us</h1>
        <Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>About us</BreadcrumbItem>
      </Breadcrumb>
      </Jumbotron>
    </div>
  );
};

export default Example;