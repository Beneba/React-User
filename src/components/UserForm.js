import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange =(e)=>{
      e.preventDefault();
       this.setState({
           [e.target.name]: e.target.value
       });  
  }

handleSubmit =(e)=>{
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState = ({ 
      name: "", 
      email: "",
       gen:"" 
      })
    
}

  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <div className="container" >
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name{" "}
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange ={this.handleChange}
            />
          </div>
          <br />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange ={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <br />
            <label htmlFor="exampleInputGen" className="form-label">
              Gen
            </label>
            <input
              type="number"
              className="form-control"
              name="gen"
              value={this.state.gen}
              onChange ={this.handleChange}
            />
          </div>
          <button onSubmit ={this.handleSubmit} > Add User</button>
        </div>
      </form>
    );
  }
}

export default UserForm;
