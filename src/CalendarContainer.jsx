import React, { Component } from 'react'
import { allDates } from './calendarData'
import range from './lib/range'

export default class extends Component {
  state = {
    month: 5,
    year: 2017
  }

  previousMonth = () => {
    this.setState(({ month, year }) => {
      if (month === 1) {
        return { month: 12, year: year - 1 }
      } else {
        return { month: month - 1, year };
      }
    })
  }

  nextMonth = () => {
    this.setState(({ month, year }) => {
      if (month === 12) {
        return { month: 1, year: year + 1 }
      } else {
        return { month: month + 1, year };
      }
    })
  }

  render() {
    const { month, year } = this.state
    const { buckets } = allDates(month, year)
    const rowCount = Math.ceil(buckets.length / 7)
    const rows = range(1, rowCount).map(n => {
      const start = 7 * (n - 1)

      return {
        columns: buckets.slice(start, start + 7)
      }
    })

    return React.cloneElement(this.props.children, {
      ...this.state,
      rows,
      previousMonth: this.previousMonth,
      nextMonth: this.nextMonth
    })
  }
}

