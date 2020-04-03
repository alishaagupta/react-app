import React, {Component} from 'react';
// import {Media} from 'reactstrap';
import {Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
                <RenderDish dish={props.dish} />
            )
        }
}

export default DishDetailComponent;