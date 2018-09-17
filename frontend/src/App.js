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
      <nav className="navbar navbar static-top navbar-expand-lg ">
        <div className="navbar-expand" id="navbar">
          <div className="navbar-nav">
            <a className="navbar-brand" href='/LandingPage' >Welcome to LostNFound</a>
          </div>
        </div>
        <button className="btn btn-outline-info my-2 my-sm-0 pull-right" onClick={()=>{ window.location.assign('/LostObjects');}}>Lost Objects</button>
        <div className="divider"/>
        <button className="btn btn-outline-info my-2 my-sm-0 pull-right" onClick={()=>{ window.location.assign('/AddLostObjects');}}>Add Lost Object</button>
        <div className="divider"/>
        <button className="btn btn-outline-info my-2 my-sm-0 pull-right" onClick={()=>{ window.location.assign('/FoundObjects');}}>Found Objects</button>
        <div className="divider"/>
        <button className="btn btn-outline-info my-2 my-sm-0 pull-right" onClick={()=>{ window.location.assign('/AddFoundObjects');}}>Add Found Object</button>
        <div className="dividerRight"/>
        <button className="btn btn-outline-info my-2 my-sm-0 pull-right" onClick={()=>{ window.location.assign('/Login');}}>Login</button>
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
  