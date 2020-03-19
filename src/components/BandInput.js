import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  onInputChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={ e => this.onSubmit(e) }>
          <input
          type="text"
          value={this.state.name}
          onChange={ e => this.onInputChange(e) } />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
