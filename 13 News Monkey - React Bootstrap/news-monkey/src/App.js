import React, { Component } from 'react'
import NavbarReact from './components/NavbarReact'
import News from './components/News'


export default class App extends Component {
  render() {
    return (
      <div>
       <NavbarReact/>
       <News/>
      </div>
    )
  }
}







