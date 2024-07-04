import React from 'react';
import { Button } from 'react-bootstrap';

const Project = ({project}) => {
    const{name,description,thumb}=project;
    
    return (
        <div className="row border border-dark">
            <div className="col col-sm-12 col-md-6 col-lg-6"><img style={{width:'60%'}} src={thumb} alt="" /></div>
            <div className="col col-sm-12 col-md-6 col-lg-6">
            <h2 className="mb-auto">{name}</h2>
            <div className="mt-lg-5">
            <Button  className="d-lg-inline d-sm-block ms-sm-auto me-sm-auto mb-sm-4 mb-lg-0">Details</Button>
            <Button className=" ms-sm-auto me-sm-auto ms-lg-5">visit</Button>
            </div>
            </div>
            
        </div>
    );
};

export default Project;