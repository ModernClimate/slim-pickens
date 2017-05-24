import React, { Component } from 'react'
import { allDates } from './calendarData'
import range from './lib/range'

function renderDate(date, bucketNumber) {
  return (
    <td key={bucketNumber}>
      {date && date.getDate()}
    </td>
  )
}

function renderRow(buckets) {
  return n => {
    const start = 7 * (n - 1)
    const end = start + 6

    return (
      <tr key={`row-${n}`}>
        {range(start, end).map(m => renderDate(buckets[m], m))}
      </tr>
    )
  }
}

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
    const { dates, buckets, offset } = allDates(month, year)
    const bucketCount = dates.length + offset
    const rowCount = Math.ceil(bucketCount / 7)

    return (
      <div className="calendar">
        <h2>
          <button type="button" onClick={this.previousMonth}>
            &lt;
          </button>
          {month} / {year}
          <button type="button" onClick={this.nextMonth}>
            &gt;
          </button>
        </h2>
        <table>
          <thead>
            <tr>
              <th>Su</th>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
            </tr>
          </thead>
          <tbody>
            {range(1, rowCount).map(renderRow(buckets))}
          </tbody>
        </table>
      </div>
    )
  }
}

