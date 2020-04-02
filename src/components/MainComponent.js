import React, { Component } from 'react';
import{Navbar, NavbarBrand} from'reactstrap';
import Menu from './MenuComponent';
import DishDetailComponent from'./DishDetailComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId){
    console.log('yaar ', dishId)
    this.setState({selectedDish: dishId})
        // should call another component
   }

  render(){
    return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/"> First App </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
      onClick={(dishId) => this.onDishSelect(dishId)}
       />
      <DishDetailComponent 
      dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} 
      />
    </div>
  );
}

}
export default Main;
