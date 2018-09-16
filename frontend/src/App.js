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
            <a className="navbar-brand">Welcome to LostNFound</a>
          </div>
        </div>
        <div className="dividerRight"/>
        <button className="btn btn-outline-info my-2 my-sm-0 pull-right" onClick="changeColor()">Sign In</button>
        <div className="divider"/>
        <button className="btn btn-outline-info my-2 my-sm-0 pull-right" onClick="changeColor()">Sign Up</button>
      </nav>
    );
  }
  
  render() {
    return (
      <div className="App">
        {this.renderTopObjects()}
      </div>
    );
  }
}
  
export default App;
  