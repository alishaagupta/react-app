import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle}  from 'reactstrap';

function RenderCard({item}){
return(
<Card>
    <CardImg src={item.image} alt={item.name} />
    <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle> {item.designation} </CardSubtitle> : null }
        <CardText> {item.description} </CardText>
    </CardBody>
</Card>
);
}

function  Home(props) {
    return(
        <div className="container">
            <div className="row alogn-items-start">
                <div className="col-12 col-md m-1">
                <h1>Home</h1>
                    <RenderCard item={props.dish}/>
                    <RenderCard item={props.leader}/>
                    <RenderCard item={props.promotion}/>
                </div>
            </div>
  
        </div>
    )
}

export default Home;