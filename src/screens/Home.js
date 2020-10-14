import React, { Component } from 'react'
import firebase from 'firebase';
import db from '../config'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    }
  }
  componentDidMount() {
    document.title = 'DigiTests | Dashboard';
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        window.location.href = "/login"
      } else {
        this.setState({ email: firebase.auth().currentUser.email })
      }
    })
  }
  render() {
    return (
      <div>
        Welcome to DigiSchool!
        {this.state.email ?
          null : <a href="/login">Login</a>}
      </div>
    )
  }
}
