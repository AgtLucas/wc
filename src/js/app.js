import React, { Component } from 'react'
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
      cashForTare: 0,
      total: 0
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
    let { tarePrice } = this.state
    let moneyForTare = numberOfBottles * tarePrice
    return this.round(moneyForTare)
  }

  calculate () {
    let theBottles = this.bottlesForMoney(this.state.initialMoney)
    let cashRemaining = this.cashRemaining(theBottles)
    let moneyForTare = this.moneyForTare(theBottles)
    let total = cashRemaining + moneyForTare
    this.setState({
      bottlesForMoney: theBottles,
      cashRemaining: cashRemaining,
      cashForTare: moneyForTare,
      total: this.round(total)
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.calculate()
  }

  render () {
    console.log(this.state)
    return (
      <section>
        <div className='wrapper'>
          <p>Hey!</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className='input__field'>
              <label>
                Walter price
                <input walterPrice={this.state.walterPrice} onChange={this.onChangeWalterPrice.bind(this)} ref='walterPrice' value={this.state.walterPrice} />
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
            <p>Cash for Tare: {this.state.cashForTare}<small>€</small></p>
            <p>Total: {this.state.total}<small>€</small></p>
          </div>
        </div>
      </section>
    )
  }

}

render(<App />, document.getElementById('app__root'))
