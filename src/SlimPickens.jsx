import React from 'react'
import slimPickens from './decorate'
import classNames from './lib/classNames'

function renderRow(onPick, selected) {
  const renderDate = (date, i) => (
    <td
      key={i}
      className={classNames({
        date,
        selected: date && date.getTime() === selected.getTime()
      })}
      onClick={() => date && onPick(date)}
    >
      {date && date.getDate()}
    </td>
  )

  return (row, i) => (
    <tr key={`row-${i}`}>
      {row.columns.map(renderDate)}
    </tr>
  )
}

export function SlimPickens({
  selected,
  month,
  year,
  previousMonth,
  nextMonth,
  previousYear,
  nextYear,
  rows,
  onPick = () => {}
}) {
  const row = renderRow(onPick, selected)

  return (
    <div className="calendar">
      <h2>
        <div className="calendar-control">
          <button type="button" onClick={previousMonth}>
            &lt;
          </button>
          <span>
            {month}
          </span>
          <button type="button" onClick={nextMonth}>
            &gt;
          </button>
        </div>
        <span> / </span>
        <div className="calendar-control">
          <button type="button" onClick={previousYear}>
            &lt;
          </button>
          <span>
            {year}
          </span>
          <button type="button" onClick={nextYear}>
            &gt;
          </button>
        </div>
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
          {rows.map(row)}
        </tbody>
      </table>
    </div>
  )
}

export default slimPickens(SlimPickens)
