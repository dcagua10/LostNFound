import React, { Component } from 'react';
import {Jumbotron, Button} from 'reactstrap';
  
export default class LandingPage extends Component {
    
  constructor(props) {
    super(props);
  }
    
    
  render() {
      
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Bienvenido a LostNFound!</h1>
          <p className="lead">En este espacio podras publicar tus objetos perdidos y ver los que otras personas han encontrado.</p>
          <hr className="my-2" />
          <p>Para empezar a buscar registrate o inicia sesion.</p>
          <p className="lead">
            <Button color="success" onClick={()=>{window.location = '/signIn';}} className="mx-1">Sign In</Button>
          </p>
        </Jumbotron>        
      </div>
    );
  }
}
    