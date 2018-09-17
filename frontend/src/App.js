import React, { Component } from 'react';
import './App.css';
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button} from 'reactstrap';
import {
  getFromStorage
} from './storage';
  
export default class App extends Component {
    
  constructor(props){
    super(props);
      
    this.state = {
      collapsed: false
    };
      
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
    
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
    
  render() {
    let button1;
    let button2;
      
    const storage = getFromStorage('LostNFound');
    if (storage && storage.token) {
      const { name,lastname } = storage;
      button1 = <NavItem>
        <Button outline  color="info" onClick={()=>{window.location = '/signin';}} className="mx-1">{name} {lastname}</Button>
      </NavItem>;
    }
    else{
      button1 = <NavItem>
        <Button color="primary" onClick={()=>{window.location = '/signUp';}} className="mx-1">Sign Up</Button>
        </NavItem>;
      button2 = <NavItem>
      <Button color="success" onClick={()=>{window.location = '/signin';}} className="mx-1">Sign In</Button>
      </NavItem>;
    }
      
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">LostNFound</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline  color="info" onClick={()=>{window.location = '/lostForm';}} className="mx-1">New Lost</Button>
              </NavItem>
              <NavItem>
                <Button outline  color="info" onClick={()=>{window.location = '/foundForm';}} className="mx-1">New Found</Button>
              </NavItem>
              <NavItem>
                <Button outline  color="secondary" onClick={()=>{window.location = '/lost';}} className="mx-1">Lost</Button>
              </NavItem>
              <NavItem>
                <Button outline  color="secondary" onClick={()=>{window.location = '/found';}} className="mx-1">Found</Button>
              </NavItem>
              {button1}
              {button2}        
            </Nav>
          </Collapse>
        </Navbar>
        <div className="content">
          {this.props.children}
        </div>
        <footer className="bg-dark">
          <div className="footer_makers">Orlando Sabogal and Daniel Cagua - 2018</div>
        </footer>
      </div>
    );
  }
} 