import React, { Component } from 'react';

class LostForm extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      objId: '',
      lostbyName: '',
      lostbyLastname: '',
      objName: '',
      objPlace: '',
      objDescription: '',
      objDate: '',
      objImg: '',
      objTags: ''
    };
    this.change = this.change.bind(this);
  }
  
  change (event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      [event.target.name]: value
    });
  }
  
  onSubmit() {
    console.log(this.state);
    // Grab state
    const {
      objId,
      lostbyName,
      lostbyLastname,
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
        id: objId,
        lostbyName: lostbyName,
        lostbyLastname: lostbyLastname,
        obj: objName,
        place: objPlace,
        description: objDescription,
        date: objDate,
        img: objImg,
        tags: objTags
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          console.log(json.message);
        }
        else{
          console.log('error al subir objeto.');
        }
      });
  }
  
  render() {
    return (
      <form>
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
        <button  onClick={this.onSubmit()}>Aceptar</button>
      </form>
    );
  }
}
  
export default LostForm;