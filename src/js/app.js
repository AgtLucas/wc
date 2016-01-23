import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import styles from '../styles/main.styl'
styles

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  onChangeName (e) {
    this.setState({ name: e.target.value })
  }

  render () {
    return (
      <section>
        <div className='wrapper'>
          <p>Hey!</p>
          <div>
            <input onChange={this.onChangeName.bind(this)} ref='name' placeholder='name' />
            <p>{this.state.name}</p>
          </div>
        </div>
      </section>
    )
  }

}

render(<App />, document.getElementById('app__root'))
