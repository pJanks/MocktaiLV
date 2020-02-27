import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../../actions'
import AllMocktails from '../AllMocktails/AllMocktails'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      error: false,
      userVerified: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  loginUser = async (event, username, password) => {
    event.preventDefault();
    if(username && password) {
      await this.setState({ userVerified: true })
      this.props.addUserToStore({
        name: this.state.username,
        userVerified: true
      })
    } else {
      console.log('hi');
    }
  }

  render() {
    if(this.state.userVerified) {
      return <Redirect to= '/AllMocktails/LoggedIn' />
    } else {
      return (
        <form>
          <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
          />
          <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          />
          <button onClick={(event) => this.loginUser(event, this.state.username, this.state.password)}>Login</button>
          <button onClick={this.logUserInAsGuest}>Continue as Guest</button>
          <button onClick={this.letUserSignUp}>Sign Up</button>
        </form>
      )
    }
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addUserToStore: (user) => dispatch(addUser(user))
})

export default connect(null, mapDispatchToProps)(Login);
