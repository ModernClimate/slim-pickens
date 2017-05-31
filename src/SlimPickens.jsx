// @flow

import React from 'react';
import slimPickens from './decorate';
import classNames from './lib/classNames';

function renderRow(onPick: (date: Date) => void, selected: Date) {
  const renderDate = (date, i) => (
    <td
      key={i}
      className={classNames({
        date,
        selected: date && date.getTime() === selected.getTime()
      })}
    >
      <div role="button" tabIndex={0} onClick={() => date && onPick(date)}>
        {date && date.getDate()}
      </div>
    </td>
  );

  return (row, i) => (
    <tr key={`row-${i}`}>
      {row.columns.map(renderDate)}
    </tr>
  );
}

export function SlimPickens(
  props: {
    selected: Date,
    month: number,
    year: number,
    previousMonth: () => void,
    nextMonth: () => void,
    previousYear: () => void,
    nextYear: () => void,
    rows: Array<{ columns: Array<Date> }>,
    onPick: (Date) => void
  }
) {
  const row = renderRow(props.onPick, props.selected);

  return (
    <div className="calendar">
      <h2>
        <div className="calendar-control">
          <button type="button" onClick={props.previousMonth}>
            &lt;
          </button>
          <span>
            {props.month}
          </span>
          <button type="button" onClick={props.nextMonth}>
            &gt;
          </button>
        </div>
        <span> / </span>
        <div className="calendar-control">
          <button type="button" onClick={props.previousYear}>
            &lt;
          </button>
          <span>
            {props.year}
          </span>
          <button type="button" onClick={props.nextYear}>
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
          {props.rows.map(row)}
        </tbody>
      </table>
    </div>
  );
}

export default slimPickens(SlimPickens);
