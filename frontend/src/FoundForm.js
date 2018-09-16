import React from "react";

class FoundForm extends React.Component {
  constructor() {
    super();
    this.state = {
      object_id:"",
      object_name: "",
      image: "",
      foundby_first_name:"",
      foundby_last_name: "",
      foundby_login: "",
      date:"",
      place: "",
      description: "",
      tags: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.id);
    let object_name = event.target.value;
    let image = event.target.value;
    let value = event.target.value;
    let date = event.target.value;
    let place = event.target.value;
    let description = event.target.value;

  }

  post() {
    fetch("/api/postFoundObject", {
      body: JSON.stringify(this.state),
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    }).then(function(res) {
      if (res.status == 200) alert("The object found was added");
      else alert("There is an error, try again");
      console.log(res);
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    alert("Loading your post, please wait");
    this.post();
    event.preventDefault();
    this.setState({
      object_id:"",
      object_name: "",
      image: "",
      foundby_first_name:"",
      foundby_last_name: "",
      foundby_login: "",
      date:"",
      place: "",
      description: "",
      tags: []
    });
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
              value={this.state.object_name}
              type="text"
              className="form-control"
              id="object_name"
              placeholder="Charger"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="imagen">Image</label>
            <input
              value={this.state.image}
              type="text"
              className="form-control"
              id="image"
              aria-describedby="img"
              placeholder="https://image.ibb.co/jL9oge/Unbenched_Emote.png"
              onChange={this.handleChange}
              required
            />
            <small id="img" className="form-text text-muted">
            you must upload the url link, you can use a page like this{" "}
              <a href="https://es.imgbb.com/">https://es.imgbb.com/</a>
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              value={this.state.date}
              type="text"
              className="form-control"
              id="date"
              placeholder="MM/DD/AAAA"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="place">Place</label>
            <input
              value={this.state.place}
              type="text"
              className="form-control"
              id="place"
              placeholder="ML | LL | SD | Tx"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              value={this.state.description}
              type="text"
              className="form-control"
              id="description"
              placeholder="I found this at..."
              onChange={this.handleChange}
              required
            />
          </div>
           <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              value={this.state.tags}
              type="text"
              className="form-control"
              id="tags"
              aria-describedby="tags"
              placeholder="Charger,Black,Small"
              onChange={this.handleChange}
              required
            />
            <small id="ingre" className="form-text text-muted">
                    Tags must be entered with commas
            </small>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Add Object
          </button>
        </form>
      </div>
    );
  }
}
export default FoundForm;