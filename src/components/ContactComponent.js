import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';


class Contact extends Component{
    
    constructor(props){
        super(props);

        this.state={

            firstname:'',
            lastname:'',
            telno:'',
            email: '',
            agreed: false,
            contactType: 'Tel',
            message: '',
            touched:{
                firstname:false,
                lastname: false,
                telno: false,
                email: false
            }
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleInputChange= this.handleInputChange.bind(this)

    }
    
    handleInputChange(event){

        const target = event.target;
        const value= target.type =='checkbox' ? target.checked : target.value;
        const name= target.name; 

        this.setState({
            [name]: value
        })
    }

    handleBlur=(field) => (evt) =>{
        this.setState({
            touched: {...this.state.touched,[field]: true}
        })
    }


    validate(firstname, lastname, telno, email){

        const errors={
            firstname:'',
            lastname:'',
            telno:'',
            email:''
        }

        if(this.state.touched.firstname && firstname.length <3){
            errors.firstname=  'First name should be greater than three characters.'
        }
    }

    handleSubmit(event){
        console.log('Current state is cliejcd ',this.state)
        event.preventDefault(); //To not move to another page
    }
    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telno, this.state.email)
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3> Send us your feedback! </h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form  onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text"  id="firstname" name="firstname" 
                                    placeholder="first name" value={this.state.firstname}
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange}
                                     />
                                </Col>
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text"  id="lastname" name="lastname" placeholder="last name" value={this.state.lastname} />
                                </Col>
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone</Label>
                                <Col md={10}>
                                    <Input type="number"  id="telnum" name="telnum" placeholder="Telephone number" value={this.state.telno} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email ID</Label>
                                <Col md={10}>
                                    <Input type="email"  id="email" name="email" placeholder="Email" value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agreed} onChange={this.handleInputChange}/>
                                            <strong>May We Contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3,offset:1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType}>
                                        <option> Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea"  id="feedback" name="email" placeholder="feedback" rows="12" value={this.state.message} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                <Col md={{size:10,offset:2}}>
                                    <Button type="submit"> Send us the feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;