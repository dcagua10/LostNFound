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
  }
  
  
  
  render() {
    return (
      <form>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
        </div>
      </form>
      );
    }
  }
  
  export default LostForm;