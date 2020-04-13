import React, {Component} from 'react';
import{Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem,
Button, Modal, ModalHeader, ModalBody,
Form, FormGroup, Label, Input, Col, FormFeedbac} from'reactstrap';
import {NavLink} from  'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state={
            isNavOpen : false,
            isModalOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

    }

    toggleNav(){
        this.setState({
            isNavOpen: !(this.state.isNavOpen)
        })
    }

    toggleModal(){
        this.setState({
            isModalOpen: !(this.state.isModalOpen)
        })
    }
    render(){

        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/"> 
                            <img src="assets/images/logo.png" height="30" width="41" alt="Laallala" />
                        </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen}>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg" color="white">
                                </span>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg">
                                </span>
                                About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg">
                                </span>
                                Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-address-card fa-lg">
                                </span>
                                Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav  className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}>
                                <span className="fa fa-sign-in fa-lg">Login</span>
                            </Button>

                        </NavItem>
                    </Nav>
                    </Collapse>
 
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
                <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader toggle={this.toggleModal}> Login </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username"> Username</Label>
                                <Input type="text" id="username" name="username"/> 
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password"> Password</Label>
                                <Input type="password" id="password" name="password"/>  
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" />Remember Me
                                </Label>
                            </FormGroup>
                            <Button tye="submit" value="submit" color="bg-primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;