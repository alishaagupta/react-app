import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetailComponent from'./DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// import {DISHES} from '../shared/dishes';
// import {COMMENTS} from '../shared/comments';
// import {LEADERS} from '../shared/leaders';
// import {PROMOTIONS} from '../shared/promotions';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return{
      dishes: state.dishes,
      comments: state.comments,
      leaders: state.leaders,
      promotions:state.promotions
    }
}

class Main extends Component {

  constructor(props){
    super(props);
  }


 
  // {()  => <Menu dishes={this.state.dishes} because props has to be sent
  // if no state has to be sent then no funciton is reqruired, like homepage

  render(){

    const HomePage = () => {
      return(
        <Home  dish= {this.props.dishes.filter((element) => element.featured)[0]}
        promotion= {this.props.promotions.filter((element) => element.featured)[0]}
        leader= {this.props.leaders.filter((element) => element.featured)[0]}
        />
      )
    }

    const DishWithId = ({match, location, history})=> {

      return(
          <DishDetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))[0]}
           />
      );
    }

    return (
    <div >
      <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path = "/menu" component={()  => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId"  component= {DishWithId} />
          <Route exact path = "/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      <Footer/>
    </div>
  );
}

}
export default withRouter(connect(mapStateToProps)(Main));
