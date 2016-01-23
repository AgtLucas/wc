import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import styles from '../styles/main.styl'

class App extends Component {

  render () {
    return (
      <div>
        <p>Ok!</p>
      </div>
    )
  }

}

render(<App />, document.getElementById('app__root'))
