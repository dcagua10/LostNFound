import React, { Component } from 'react';
import 'whatwg-fetch';
import {FormGroup,Form,Label,Input,Button,Container} from 'reactstrap';
import {
  setInStorage,
  getFromStorage,
  deleteInStorage
} from './storage';

class Login extends Component {
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

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('LostNFound');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('LostNFound', { 
            token: json.token,
            name: json.name,
            lastname: json.lastname,
            login: json.login
          });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: signInEmail,
            signUpstudentId: json.student_id,
            signUpname: json.name, 
            lastname: json.lastname,
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('LostNFound');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false
            });
            deleteInStorage('LostNFound');
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if (!token) {
      return (
        <div>
          <Container>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <h1>Sign In</h1>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="form-group"
                  value={signInEmail}
                  onChange={this.onTextboxChangeSignInEmail}
                />
              </FormGroup>
              <FormGroup>
                <Label for="pass">Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  value={signInPassword}
                  className="form-group"
                  onChange={this.onTextboxChangeSignInPassword}
                />
              </FormGroup>
              <Button color="success" onClick={this.onSignIn}>Sign In</Button>
            </Form>
          </Container>
        </div>
      );
    }

    return (
      <div>
        <p>Account</p>
        <button className="btn btn-default" onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Login;