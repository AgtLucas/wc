import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

import styles from '../styles/main.styl'
styles

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      walterPrice: 0.53,
      tarePrice: 0.08,
      myMoney: 0
    }
  }

  onChangeWalterPrice (e) {
    this.setState({ walterPrice: e.target.value })
  }

  onChangeTheMoneyThatIHave (e) {
    this.setState({ myMoney: e.target.value })
  }

  render () {
    return (
      <section>
        <div className='wrapper'>
          <p>Hey!</p>
          <div className='input__field'>
            <label>
              Walter price
              <input onChange={this.onChangeWalterPrice.bind(this)} ref='walterPrice' value={this.state.walterPricee} />
            </label>
          </div>
          <div className='input__field'>
            <label>
              I have
              <input onChange={this.onChangeTheMoneyThatIHave.bind(this)} ref='myMoney' value={this.state.myMoney} />
            </label>
          </div>
          <div>
            <p>{this.state.walterPrice}</p>
            <p>{this.state.myMoney}</p>
          </div>
        </div>
      </section>
    )
  }

}

render(<App />, document.getElementById('app__root'))
