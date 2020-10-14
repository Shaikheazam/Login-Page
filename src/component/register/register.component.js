import React, { Component } from 'react';
import {Form, Input, Label, FormGroup, FormFeedback, Button} from 'reactstrap'
import {isEmail} from 'validator'

class Register extends Component{
    constructor(props){
        super(props);
        this.state=this.getInitialState();

    }
        
        getInitialState=()=>({
            data:{
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                confirmPassword:''
            },
            error:{}
        });
    
    
    handleChange = (e)=>{
        this.setState({
            data:{
                ...this.state.data,
                [e.target.name]:e.target.value
            },
            error:{
                ...this.state.error,
                [e.target.name]:''
            }
        });
    }

    validate = () =>{
        const {data} = this.state;
        let error={};
        if(data.firstName==='')
        error.firstName='First Name can not be blank';

        if(data.lastName==='')
        error.lastName='last Name can not be blank';    
        if(!isEmail(data.email))
        error.email='Email must be valid blank';
        if(data.email==='')
        error.email='email can not be blank';
        if(data.password==='')
        error.password='Password must be valid';
        if(data.confirmPassword==='' || data.confirmPassword!==data.password)
        error.confirmPassword='Password must be match';

        return error;
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {data} = this.state;
        const error = this.validate();
     

        if(Object.keys(error).length === 0){
            console.log(data);
            this.setState(this.getInitialState());
        }
        else{
            this.setState({error});
        }
    }

    render(){
        const {data,error} = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <label for='firstName'>First Name</label>
                    <Input id='firstName' value={data.firstName} invalid={error.firstName ? true:false} name='firstName' onChange={this.handleChange} />
                    <FormFeedback>{error.firstName}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <label for='laststName'>Last Name</label>
                    <Input id='lastName' value={data.lastName} invalid={error.lastName ? true:false} name='lastName' onChange={this.handleChange} />
                    <FormFeedback>{error.lastName}</FormFeedback>
                </FormGroup>


                <FormGroup>
                    <label for='email'>Email</label>
                    <Input id='email' value={data.email} invalid={error.email ? true:false} name='email' onChange={this.handleChange} />
                    <FormFeedback>{error.email}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <label for='password'>Password</label>
                    <Input id='password' value={data.password} invalid={error.password ? true:false} name='password' onChange={this.handleChange} />
                    <FormFeedback>{error.password}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <label for='confirmPassword'>Confirm Password</label>
                    <Input id='confirmPassword' value={data.confirmPassword} invalid={error.confirmPassword ? true:false} name='confirmPassword' onChange={this.handleChange} />
                    <FormFeedback>{error.confirmPassword}</FormFeedback>
                </FormGroup>

                <Button color='primary'> Regular </Button>

            </Form>
        )

    }
}

export default Register;