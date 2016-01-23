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
      initialMoney: 0,
      bottlesForMoney: 0,
      cashRemaining: 0,
      cashForTare: 0
    }
  }

  round (x) {
    return Math.round(x * 100.0) / 100.0
  }

  onChangeWalterPrice (e) {
    this.setState({ walterPrice: e.target.value })
  }

  onChangeTheMoneyThatIHave (e) {
    this.setState({ initialMoney: e.target.value })
  }

  bottlesForMoney (initialMoney) {
    let { walterPrice } = this.state
    return Math.floor(initialMoney / walterPrice)
  }

  cashRemaining (numberOfBottles) {
    let { walterPrice, initialMoney } = this.state
    let cashRemaining = initialMoney - numberOfBottles * walterPrice
    return this.round(cashRemaining)
  }

  moneyForTare (numberOfBottles) {

  }

  handleSubmit (e) {
    e.preventDefault()
    let y = this.bottlesForMoney(this.state.initialMoney)
    let x = this.cashRemaining(y)
    this.setState({
      bottlesForMoney: y,
      cashRemaining: x
    })
  }

  render () {
    return (
      <section>
        <div className='wrapper'>
          <p>Hey!</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className='input__field'>
              <label>
              Walter price
                <input onChange={this.onChangeWalterPrice.bind(this)} ref='walterPrice' value={this.state.walterPrice} />
              </label>
            </div>
            <div className='input__field'>
              <label>
              I have
                <input onChange={this.onChangeTheMoneyThatIHave.bind(this)} ref='initialMoney' value={this.state.initialMoney} />
              </label>
            </div>
            <button>Calculate</button>
          </form>

          <div>
            <p>Bottles: {this.state.bottlesForMoney}</p>
            <p>Cash Remaining: {this.state.cashRemaining}<small>€</small></p>
          </div>
        </div>
      </section>
    )
  }

}

render(<App />, document.getElementById('app__root'))
