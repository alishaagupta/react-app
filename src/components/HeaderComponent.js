import React, {Component} from 'react';
import{Navbar, NavbarBrand, Jumbotron} from'reactstrap';


class Header extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <>
                <Navbar dark>
                <div className="container">
                <NavbarBrand href="/"> First App </NavbarBrand>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1> Random Heading</h1>
                                <p>Some data </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;