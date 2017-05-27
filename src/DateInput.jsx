import React, { Component } from 'react'
import slimPickens from './decorate'
import classNames from './lib/classNames'
import node from './lib/node'
import { SlimPickens } from './SlimPickens'

export class DateInput extends Component {
  state = {
    open: false
  }

  open = () => {
    document.addEventListener('keydown', this.keydown)
    document.addEventListener('click', this.clickAway)
    this.setState({ open: true })
  }

  close = () => {
    document.removeEventListener('keydown', this.keydown)
    document.removeEventListener('click', this.clickAway)
    this.setState({ open: false })
  }

  keydown = (e) => {
    if (e.which === 27) {
      this.close()
    }
  }

  clickAway = (e) => {
    if (!node(this.slim).contains(e.target)) {
      this.close()
    }
  }

  picker() {
    const { format: _, onPick, ...rest } = this.props;

    const pick = (date) => {
      onPick(date)
      this.close()
    }

    return this.state.open && <SlimPickens onPick={pick} {...rest} />
  }

  render() {
    const { selected, format } = this.props

    return (
      <div className='date-input'>
        <input
          value={format(selected)}
          onChange={() => {}}
          disabled={this.state.open}
          onClick={this.open}
          onFocus={this.open}
        />
        <div ref={(node) => { this.slim = node }}>
          {this.picker()}
        </div>
      </div>
    )
  }
}

DateInput.defaultProps = {
  format: d => d.toLocaleDateString()
}

export default slimPickens(DateInput)
