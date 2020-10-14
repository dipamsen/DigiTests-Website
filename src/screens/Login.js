import React, { Component } from 'react'
import firebase from 'firebase';
import db from '../config'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }
  componentDidMount() {
    document.title = 'DigiTests | Login';

    firebase.auth().onAuthStateChanged(user => {
      if (user) window.location.replace("/")
    })
  }
  render() {
    const { email, password } = this.state
    const setEmail = e => this.setState({ email: e })
    const setPassword = e => this.setState({ password: e })
    return (
      <div>
        Login to Continue
        <input type="text" value={email} onChange={x => setEmail(x.target.value)} />
        <input type="password" value={password} onChange={x => setPassword(x.target.value)} />
        <button onClick={this.login} type="submit">Login</button>
      </div>
    )
  }
  login = () => {
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password).catch(err => alert(err.message))
  }

}
