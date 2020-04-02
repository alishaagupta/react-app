import React, {Component} from 'react';
// import {Media} from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetailComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            dish: this.props.dish
        }
    }

    componentDidMount(){
    }

    renderDish(){
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
            <CardImg width="100%" src={this.props.dish.image || ""} alt={this.props.dish.name || ""}/>
            <CardBody>
                <CardTitle>{this.props.dish.title || ""}</CardTitle>
                <CardText>{this.props.dish.description || ""}</CardText>
            </CardBody>
        </Card>
        </div>
        )
    }

    render(){
        const dish = this.state.dish

        if (this.props.dish == null || undefined ) {
            return (<div></div>)
        }
        else{
          return(this.renderDish())
        }

    }

}

export default DishDetailComponent;