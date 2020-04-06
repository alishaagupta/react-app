import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetailComponent from'./DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    }
  }


  // {()  => <Menu dishes={this.state.dishes} because props has to be sent
  // if no state has to be sent then no funciton is reqruired, like homepage

  render(){

    const HomePage = () => {
      return(
        <Home  dish= {this.state.dishes.filter((element) => element.featured)[0]}
        promotion= {this.state.promotions.filter((element) => element.featured)[0]}
        leader= {this.state.leaders.filter((element) => element.featured)[0]}
        />
      )
    }

    const DishWithId = ({match, location, history})=> {

      return(
          <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))[0]}
           />
      );
    }

    return (
    <div >
      <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path = "/menu" component={()  => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId"  component= {DishWithId} />
          <Route exact path = "/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      <Footer/>
    </div>
  );
}

}
export default Main;
