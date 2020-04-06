import React, {Component} from 'react';
// import {Media} from 'reactstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


function RenderDish(dish) {
    return(
        <Card>
        <CardImg width="100%" src={dish.image || ""} alt={dish.name || ""}/>
        <CardBody>
            <CardTitle>{dish.title || ""}</CardTitle>
            <CardText>{dish.description || ""}</CardText>
        </CardBody>
    </Card>
    )
}


// turn render function to const

const DishDetailComponent = (props) => {
        if (props.dish == null || undefined ) {
            return (<div></div>)
        }else{
       
            return(
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/home"> Home </Link></BreadcrumbItem>
                    <BreadcrumbItem> <Link to="/menu"> Menu </Link></BreadcrumbItem>

                    <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                </Breadcrumb>
               <h3> {props.dish.name} </h3>
                <RenderDish dish={props.dish} />
                </div>
            )
        }
}

export default DishDetailComponent;