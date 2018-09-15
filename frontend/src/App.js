import React, { Component } from 'react';
import './App.css';

import Objeto from './Objeto.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      objetos : [
        {id:1 ,foundby_first_name:"Sapo", description:"No sirve", place:"SD"}
      ]
    };
  }

  componentDidMount(){
    fetch('/getData')
    .then((res) => {
      return res.json();
    })
    .then((json) => this.setState({objetos:json}))
    .catch((err) => console.log(err));
  }

  renderObjects() {
    return this.state.objetos.map((obj) => 
    // <Objeto objeto={obj}/>
    <div key={obj.id}>{obj.foundby_first_name} - {obj.description} in {obj.place}</div>
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Lost N Found</h1>
        {this.renderObjects()}
      </div>
    );
  }
}
  
export default App;
  