import React, { Component } from 'react';
import 'whatwg-fetch';
import { FormGroup,Form,Label,Input,Button,Container } from 'reactstrap';

class signUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: 'Error al crear usuario',
      signInError: 'Error al iniciar sesión.',
      signInEmail: '',
      signInPassword: '',
      signUpstudentId: '',
      signUpname: '',
      signUplastname: '',
      signUplogin: '',
      signUpEmail: '',
      signUpPassword: '',
    };

    this.onTextboxChangeSignUpStudentId = this.onTextboxChangeSignUpStudentId.bind(this);
    this.onTextboxChangeSignUpName = this.onTextboxChangeSignUpName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
    this.onTextboxChangeSignUpLogin = this.onTextboxChangeSignUpLogin.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    
    this.onSignUp = this.onSignUp.bind(this);

  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpStudentId(event) {
    this.setState({
      signUpstudentId: event.target.value,
    });
  }

  onTextboxChangeSignUpName(event) {
    this.setState({
      signUpname: event.target.value,
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUplastname: event.target.value,
    });
  }

  onTextboxChangeSignUpLogin(event) {
    this.setState({
      signUplogin: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onSignUp() {
    // Grab state
    const {
      signUpname,
      signUplastname,
      signUplogin,
      signUpstudentId,
      signUpEmail,
      signUpPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        student_id: signUpstudentId,
        name: signUpname, 
        lastname: signUplastname,
        login: signUplogin,
        password: signUpPassword,
        email: signUpEmail
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  

  render() {

    const {
      signUpstudentId,
      signUpname,
      signUplastname,
      signUplogin,
      signUpEmail,
      signUpPassword,
      signUpError,
    } = this.state;

    return (
      <div>
        <Container>
          {
            (signUpError) ? (
              <p>{signUpError}</p>
            ) : (null)
          }
          <h1>Sign Up</h1>
          <Form>
            <FormGroup>
              <Label for="codigo">Codigo Uniandes</Label>
              <Input
                type="number"
                placeholder="Codigo Uniandes"
                value={signUpstudentId}
                className="form-group"
                onChange={this.onTextboxChangeSignUpStudentId}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input
                type="text"
                placeholder="Nombre"
                value={signUpname}
                className="form-group"
                onChange={this.onTextboxChangeSignUpName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="apellido">Apellido</Label>
              <Input
                type="text"
                placeholder="Apellido"
                value={signUplastname}
                className="form-group"
                onChange={this.onTextboxChangeSignUpLastName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="login">Login</Label>
              <Input
                type="text"
                placeholder="Login"
                value={signUplogin}
                className="form-group"
                onChange={this.onTextboxChangeSignUpLogin}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                className="form-group"
                onChange={this.onTextboxChangeSignUpEmail}
              />
            </FormGroup>
            <FormGroup>
              <Label for="pass">Password</Label>
              <Input
                type="password"
                placeholder="Password"
                value={signUpPassword}
                className="form-group"
                onChange={this.onTextboxChangeSignUpPassword}
              />
            </FormGroup>
            <Button color="success" onClick={this.onSignUp}>Sign Up</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default signUp;