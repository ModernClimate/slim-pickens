import React from 'react'
import SlimProto from './SlimProto'

export default class SlimContainer extends SlimProto {
  render() {
    return React.cloneElement(this.props.children, {
      ...this.state,
      rows: this.rows(),
      previousMonth: this.previousMonth,
      nextMonth: this.nextMonth
    })
  }
}

