import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: ''
    }
  }

  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state);
  }

  handleSignUpButtonClick = (event, name, password) => {
    event.preventDefault()
    console.log(this.state);
    localStorage.setItem(name, JSON.stringify(this.state));
  }


  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button onClick={(event) => this.handleSignUpButtonClick(event, this.state.name, this.state.password)}>Sign Up</button>
      </form>
    )
  }
}

export const mapDispatchToProps = () => {

}

export default connect(null, mapDispatchToProps)(SignUp);
