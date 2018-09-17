import React, { Component } from 'react';

class LandingPage extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      objetos : []
    };
  }
  
  renderObjects() {
    return ( 
        <div>
        <header class="masthead text-center text-white d-flex">
        <div class="container my-auto">
          <div class="row">
            <div class="col-lg-10 mx-auto">
              <h1 class="text-uppercase">
                <strong>Welcome to LostNFound</strong>
              </h1>
            </div>
            <div class="col-lg-8 mx-auto">
              <p class="text-faded mb-5">In this website you can search for your personal objects if you lost them or help others finding theirs</p>
              <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Start Searching</a>
            </div>
          </div>
        </div>
      </header></div>
    );
  }
  
  render() {
    return (
      <div className="LandingPage">
        {this.renderObjects()}
      </div>
    );
  }
}
  
export default LandingPage;
  