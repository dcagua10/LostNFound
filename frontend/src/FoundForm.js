import React from 'react';
import {
  getFromStorage
} from './storage';

class FoundForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      objfoundby_last_name: '',
      objfoundby_first_name: '',
      objfoundby_login: '',
      objobject_name: '',
      objplace: '',
      objdescription: '',
      objrecovered: 'NO',
      objdate: '',
      objimage: '',
      objtags: []
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
      objfoundby_last_name,
      objfoundby_first_name,
      objfoundby_login,
      objobject_name,
      objplace,
      objdescription,
      objrecovered,
      objdate,
      objimage,
      objtags
    } = this.state;
    fetch('api/found', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        foundby_last_name: objfoundby_last_name ,
        foundby_first_name: objfoundby_first_name ,
        foundby_login: objfoundby_login ,
        object_name: objobject_name ,
        place: objplace ,
        description: objdescription ,
        recovered: objrecovered ,
        date: objdate ,
        image: objimage ,
        tags: objtags
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
        objfoundby_last_name: name,
        objfoundby_first_name: lastname,
        objfoundby_login: login,
        isLoading: false
      }, () => this.APICall());
    }
    else{
      alert('Debes iniciar sesion.');
    }
  }
  
  render() {
    return (
      <div className="container">
        <h1>Add a new object found</h1>
        <h3>In this way you help us to grow</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="object_name">Object name</label>
            <input
              type="text"
              value={this.state.objName}
              onChange={this.change}
              className="form-control"
              name="objobject_name"
              placeholder="Charger"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              value={this.state.image}
              type="text"
              className="form-control"
              name="objimage"
              aria-describedby="img"
              placeholder="https://image.ibb.co/jL9oge/Unbenched_Emote.png"
              onChange={this.change}
              required
            />
            <small id="img" className="form-text text-muted">
      you must upload the url link with the extension of your image{' '}
            </small>
          </div>
          {/* <div className="form-group">
      <label htmlFor="image_uploads">Image File</label>
      <input 
      value={this.state.input}
      type="file"
      className="form-control"
      aria-describedby="objimg"
      id="image_uploads" 
      name="image_uploads"
      accept="image/*"
      onChange={this.change}
      required
      />
      <div className="preview">
      <p>No files currently selected for upload</p>
      </div>
      <small id="img" className="form-text text-muted">
      You must upload a file with img format{' '}
      </small>
    </div> */}
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              value={this.state.date}
              type="date"
              className="form-control"
              name="objdate"
              placeholder="MM/DD/AAAA"
              onChange={this.change}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="place">Place</label>
            <input
              value={this.state.place}
              type="text"
              className="form-control"
              name="objplace"
              placeholder="ML | LL | SD | Tx"
              onChange={this.change}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              value={this.state.description}
              type="text"
              className="form-control"
              name="objdescription"
              placeholder="I found this at..."
              onChange={this.change}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              value={this.state.tags}
              type="text"
              className="form-control"
              name="objtags"
              aria-describedby="tags"
              placeholder="Charger,Black,Small"
              onChange={this.change}
              required
            />
            <small id="ingre" className="form-text text-muted">
    Tags must be entered with commas
            </small>
          </div>
          <br />
          <button type="submit" onClick={e=>this.onSubmit(e)} className="btn btn-primary">
    Add Object
          </button>
        </form>
      </div>
    );
  }
}
export default FoundForm;