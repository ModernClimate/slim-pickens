import React from 'react'
import slimPickens from './decorate'

function renderDate(date, i) {
  return (
    <td key={i}>
      {date && date.getDate()}
    </td>
  )
}

function renderRow(row, i) {
  return (
    <tr key={`row-${i}`}>
      {row.columns.map(renderDate)}
    </tr>
  )
}

export function SlimPickens({ month, year, previousMonth, nextMonth, rows }) {
  return (
    <div className="calendar">
      <h2>
        <button type="button" onClick={previousMonth}>
          &lt;
        </button>
        {month} / {year}
        <button type="button" onClick={nextMonth}>
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
          {rows.map(renderRow)}
        </tbody>
      </table>
    </div>
  )
}

export default slimPickens(SlimPickens)
