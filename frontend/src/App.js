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
      <nav className="navbar navbar static-top navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-expand" id="navbar">
          <div className="navbar-nav">
            <a className="navbar-brand" href="#">Welcome to LostNFound</a>
          </div>
        </div>
        <div className="dividerRight"/>
        <button className="btn btn-outline-info my-2 my-sm-0 pull-right" onClick="changeColor()">Sign In</button>
        <div className="divider"/>
        <button className="btn btn-outline-info my-2 my-sm-0 pull-right" onClick="changeColor()">Sign Up</button>
      </nav>
    );
  }
  
  renderContent()
  {
    <div className="content">
      {this.props.children}
    </div>;
  }
  
  renderLowObjects()
  {
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-3">© 2018 Copyright: Orlando Sabogal and Daniel Cagua
      </div>
    </footer>;
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
  