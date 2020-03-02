import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../../actions'
import AllMocktails from '../AllMocktails/AllMocktails'
import './Login.css';


export class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      userVerified: false,
      isGuest: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  checkLocalStorage = (name, password) => {
    let keys = Object.keys(localStorage)
    let user = keys.find(key => {
      return (JSON.parse(localStorage[key]).name === name && JSON.parse(localStorage[key]).password === password)
    })
    return user
  }

  handleLoginButtonClick = async (event, username, password) => {
    event.preventDefault();
    let validatedUserStorage = this.checkLocalStorage(username, password)
    if(username && password && validatedUserStorage) {
      await this.setState({ userVerified: true })
      this.props.addUserToStore({
        name: this.state.username,
        userVerified: true
      })
    } else {
      window.alert('You Must Sign Up')
    }
  }

  handleGuestButtonClick = (event) => {
    event.preventDefault()
    this.setState({ isGuest: true })
  }

  render() {
    if(this.state.userVerified || this.state.isGuest) {
      return <Redirect to= '/AllMocktails' />
    } else {
      return (
        <main className='login'>
        <div className='login-content'>
          <form className='login-form'>
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
            <button onClick={(event) => this.handleLoginButtonClick(event, this.state.username, this.state.password)}>Login</button>
            <button onClick={(event) => this.handleGuestButtonClick(event)}>Continue as Guest</button>
            <button onClick={(event) => this.handleSignUpButtonClick(event)}><Link className='link' to='/SignUp'>Sign Up</Link></button>
          </form>
          <br />
          <h4>
            Find drinks to enjoy while your enjoying yourself in Sin City without the intoxicating effects of alcohol (if you so chose). Otherwise feel free to browse our alcoholc drinks in the 'Off the Wagon' section!
          </h4>
          </div>
        </main>
      )
    }
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addUserToStore: (user) => dispatch(addUser(user))
})

export default connect(null, mapDispatchToProps)(Login);
