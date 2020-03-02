import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './SignUp.css'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      password: ''
    }
  }

  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value });
  }

  handleSignUpButtonClick = (event, name, password) => {
    event.preventDefault()
    localStorage.setItem(name, JSON.stringify(this.state));
  }


  render() {
    return (
      <section>
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
        <button onClick={(event) => this.handleSignUpButtonClick(event, this.state.name, this.state.password)}><Link className='link' to='/'>Sign Up</Link></button>
      </form>
      </section>
    )
  }
}

export default SignUp
