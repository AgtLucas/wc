import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import styles from '../styles/main.styl'
styles

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      walterPrice: 0.53,
      tarePrice: 0.08
    }
  }

  onChangeWalterPrice (e) {
    this.setState({ walterPrice: e.target.value })
  }

  render () {
    return (
      <section>
        <div className='wrapper'>
          <p>Hey!</p>
          <div>
            <input onChange={this.onChangeWalterPrice.bind(this)} ref='walterPrice' placeholder='Walter Price' value={this.state.walterPricee} />
            <p>{this.state.walterPrice}</p>
          </div>
        </div>
      </section>
    )
  }

}

render(<App />, document.getElementById('app__root'))
