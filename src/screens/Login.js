import React, { Component } from 'react'
import firebase from 'firebase';
import db from '../config'
import '../styles/login.css'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginEmail: "",
      loginPass: "",
      regName: "",
      regPass: "",
      regType: "student",
      regCPass: "",
      regEmail: "",
    }
    this.checkedAuth = false
  }
  componentDidMount() {
    document.title = 'DigiTests | Login';

    firebase.auth().onAuthStateChanged(user => {
      if (user && !this.checkedAuth) window.location.replace("/")
      this.checkedAuth = true
    })
  }
  render() {
    const { loginEmail, loginPass, regEmail, regCPass, regPass, regName, regType } = this.state
    const setLoginEmail = e => this.setState({ loginEmail: e })
    const setLoginPassword = e => this.setState({ loginPass: e })
    const setRegName = e => this.setState({ regName: e })
    const setRegEmail = e => this.setState({ regEmail: e })
    const setRegPass = e => this.setState({ regPass: e })
    const setRegCPass = e => this.setState({ regCPass: e })
    const setRegUserType = e => this.setState({ regType: e })

    return (
      <div className="main">
        <div className="login">
          <h2>Login to Continue</h2>
          <input type="email" placeholder="Email ID" value={loginEmail} onChange={x => setLoginEmail(x.target.value)} />
          <input type="password" placeholder="Password" value={loginPass} onChange={x => setLoginPassword(x.target.value)} />
          <button onClick={this.login} type="submit">Login</button>
        </div>
        <hr />
        <div className="register">
          <h2>Register to DigiTests</h2>
          <input type="text" placeholder="Name" value={regName} onChange={x => setRegName(x.target.value)} />
          <input type="email" placeholder="Email ID" value={regEmail} onChange={x => setRegEmail(x.target.value)} />
          <input type="password" placeholder="Password" value={regPass} onChange={x => setRegPass(x.target.value)} />
          <input type="password" placeholder="Confirm Password" value={regCPass} onChange={x => setRegCPass(x.target.value)} />

          <select onChange={c => setRegUserType(c.target.value)} value={regType}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <button onClick={this.register} type="submit">Register</button>
        </div>
      </div>
    )
  }
  login = () => {
    const { loginEmail: email, loginPass: password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password).catch(err => alert(err.message))
  }
  register = () => {
    const { regName, regEmail, regPass, regType, regCPass } = this.state
    if (regPass !== regCPass) return alert("Your Passwords don't match.")
    firebase.auth().createUserWithEmailAndPassword(regEmail, regPass).then(user => {
      db.collection("users").add({
        name: regName,
        email: regEmail,
        type: regType,
      }).then(doc => {
        alert("Account created Successfully.")
        // window.location.replace("/")
      })
    }).catch(err => alert(err.message))
  }

}