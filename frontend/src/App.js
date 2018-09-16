import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      objetos : [
        {id:1 ,foundby_first_name:'Sapo', description:'No sirve', place:'SD'}
      ]
    };
  }
  
  renderTopObjects() {
    return ( 
      // <Objeto objeto={obj}/>
      //<div key={obj.id}>{obj.foundby_first_name} - {obj.description} in {obj.place}</div>
      <nav class="navbar navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-expand" id="navbar">
      <div class="navbar-nav">
      <a class="navbar-brand" href="#">Welcome to LostNFound</a>
    </div>
    </div>
    <div class="dividerRight"/>
    <button class="btn btn-outline-info my-2 my-sm-0 pull-right" onclick="changeColor()">Sign In</button>
    <div class="divider"/>
    <button class="btn btn-outline-info my-2 my-sm-0 pull-right" onclick="changeColor()">Sign Up</button>
    </nav>
    );
  }
  
  renderContent()
  {
    <div className="content">
    {this.props.children}
    </div>
  }
  
  renderLowObjects()
  {
    <footer class="page-footer font-small blue">
    <div class="footer-copyright text-center py-3">© 2018 Copyright: Orlando Sabogal and Daniel Cagua
    </div>
    </footer>
  }
  
  render() {
    return (
      <div className="App">
      {this.renderTopObjects()}
      {this.renderContent()}
      {this.renderLowObjects()}
      </div>
      );
    }
  }
  
  export default App;
  