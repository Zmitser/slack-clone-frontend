import React, {Component} from "react"
import {Button, Form, Grid, Header, Icon, Message, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    };

    handleChange = event => {
      this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault()

        
    }

    render() {
        const {username, email, password, passwordConfirmation} = this.state;
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2'
                            icon color="orange"
                            textAlign="center">
                        <Icon name="puzzle piece" color='orange'/>
                        Register for DevChat
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input
                                fluid
                                name="username"
                                icon="user"
                                value={username}
                                iconPosition="left"
                                placeholder="Username"
                                type="text"
                                onChange={this.handleChange}/>
                            <Form.Input
                                fluid
                                name="email"
                                icon="mail"
                                value={email}
                                iconPosition="left"
                                placeholder="Email Address"
                                type="email"
                                onChange={this.handleChange}/>
                            <Form.Input
                                fluid
                                name="password"
                                icon="lock"
                                value={password}
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                onChange={this.handleChange}/>
                            <Form.Input
                                fluid
                                name="passwordConfirmation"
                                value={passwordConfirmation}
                                icon="repeat"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                onChange={this.handleChange}/>

                            <Button color="orange" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Already a user <Link to="/login">Login</Link></Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register;