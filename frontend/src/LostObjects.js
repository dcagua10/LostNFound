import React, { Component } from 'react';
import './LFObjects.css';

class LostObjects extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      lostObjects : [
        {object_id:1 ,object_name:'Celular',image:'',lostby_first_name:'Sapo',lostby_last_name:'Perez',date:'09/29/2018',place:'B', description:'No sirve'},
        {object_id:2 ,object_name:'Celular',image:'',lostby_first_name:'Sapo',lostby_last_name:'Perez',date:'09/29/2018',place:'B', description:'No sirve'},
        {object_id:3 ,object_name:'Celular',image:'',lostby_first_name:'Sapo',lostby_last_name:'Perez',date:'09/29/2018',place:'B', description:'No sirve'}
      ]
    };

    this.renderImage = this.renderImage.bind(this);
  }
  
  componentDidMount(){
    fetch('/getData/lost')
      .then((res) => {
        return res.json();
      })
      .then((json) => this.setState({lostObjects:json}))
      .catch((err) => console.log(err));
  }

  renderImage(obj){
    if(!obj.image){
      return '/images/object_default.jpg';
    }
    else{
      return obj.image;
    }
  }
  
  renderObjects() {
    return this.state.lostObjects.map((obj) => 
    // <Objeto objeto={obj}/>
      <div className="card" key={obj.object_id}>
        <img src={this.renderImage(obj)} alt="Avatar"/>
        <div className="container">
          <h4><b>{obj.lostby_first_name} {obj.lostby_last_name}</b></h4>
          {/* <p>Object ID: {obj.object_id}</p> */}
          <p>Objeto: {obj.object_name}</p> 
          <p>Lost date: {obj.date}</p>
          <p>Place: {obj.place}</p>
          <p>Description: {obj.description}</p>
          <button className="btn btn-success" type="button">Its mine!</button>
        </div>
      </div>
    );
  }
  
  render()
  {
    return (
      <div className="lostObjects">
        <h1>Lost Objects List</h1>
        {
          <div className="grid-container">
            {this.renderObjects()}
          </div>
        }
      </div>
    );
  }
}
  
export default LostObjects;
  