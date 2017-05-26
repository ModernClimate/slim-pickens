import React from 'react'
import SlimProto from './SlimProto'

export default class SlimContainer extends SlimProto {
  render() {
    return React.cloneElement(this.props.children, {
      ...this.state,
      rows: this.rows(),
      selected: this.selected(),
      previousMonth: this.previousMonth,
      nextMonth: this.nextMonth
    })
  }
}

