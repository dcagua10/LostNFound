import React, { Component } from 'react';
import {
  getFromStorage
} from './storage';

class LostForm extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      //objId: '',
      objlostbyName: '',
      objlostbyLastname: '',
      objlostbyLogin: '',
      objName: '',
      objPlace: '',
      objDescription: '',
      objDate: '',
      objImg: '',
      objTags: []
    };
    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.APICall = this.APICall.bind(this);
  }
  
  change (event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      [event.target.name]: value
    });
  }

  APICall() {
    const {
      //objId,
      objlostbyName,
      objlostbyLastname,
      objlostbyLogin,
      objName,
      objPlace,
      objDescription,
      objDate,
      objImg,
      objTags
    } = this.state;
    fetch('api/lost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //id: objId,
        lostby_first_name: objlostbyName,
        lostby_last_name: objlostbyLastname,
        lostByLogin: objlostbyLogin,
        obj: objName,
        place: objPlace,
        description: objDescription,
        date: objDate,
        img: objImg,
        tags: objTags
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json',json);
        if (json.success) {
          console.log(json.message);
        }
        else{
          console.log('error al subir objeto.');
        }
      });
  }
  
  onSubmit(e) {
    e.preventDefault();
    //console.log(this.state);
    // Grab state
    const storage = getFromStorage('LostNFound');
    if (storage && storage.token) {
      const { token,name,lastname,login } = storage;
      this.setState({
        token,
        objlostbyName: name,
        objlostbyLastname: lastname,
        objlostbyLogin: login,
        isLoading: false
      }, () => this.APICall());
    }
    else{
      alert('Debes iniciar sesion.');
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Que perdiste?</label>
          <input name ="objName" type="text" value={this.state.objName} onChange={this.change}/>
        </div>
        <div className="form-group">
          <label>Donde lo perdiste?</label>
          <input name ="objPlace" type="text" value={this.state.objPlace} onChange={this.change}/>
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <input name ="objDescription" type="text" value={this.state.objDescription} onChange={this.change}/>
        </div>
        <div className="form-group">
          <label>Cuando lo perdiste?</label>
          <input name ="objDate" type="date" value={this.state.objDate} onChange={this.change}/>
        </div>
        <div className="form-group">
          <label>Foto</label>
          <input name ="objImg" type="text" value={this.state.objImg} onChange={this.change}/>
        </div>
        <div className="form-group">
          <label>Tags</label>
          <input name ="objTags" type="text" value={this.state.objTags} onChange={this.change}/>
        </div>
        <button  onClick={e=>this.onSubmit(e)}>Aceptar</button>
      </form>
    );
  }
}
  
export default LostForm;