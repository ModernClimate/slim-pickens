# slim-pickens

A lightweight date picker utility for React. Use our components or easily roll your own. Read on.

## Installation

**npm**
```
npm i --save @ackmann-dickenson/slim-pickens
```

**yarn**
```
yarn add @ackmann-dickenson/slim-pickens
```

## Usage

We expose some simple, usable datepicker components. Don't like 'em? We expose ways to
let you easily write your own custom components.

### Pre-made Components

Look no further than the example app to see how to use our pre-made components:

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import { SlimPickens } from '@ackmann-dickenson/slim-pickens';
import './App.css';

class App extends Component {
  state = {
    selected: new Date('4/20/2016')
  }

  select = selected => this.setState({ selected })

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SlimPickens onPick={this.select} selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
```

### Custom Components

If you don't like ours, build your own! You can use decorators or inheritance, take your pickens!

#### Decorators

Just decorate it with the `slimPickens` decorator and
it will inject all the properties you need:


Property Name | Description
---|:---
month | Calendar month (1-12)
year | Calendar year (YYYY)
previousMonth | Function to go to the previous month
nextMonth | Function to go to the next month
rows | Contains the data to fill each cell in the calendar for the current month and year

In fact, the `SlimPickens` premade component is written with this decorator:

```javascript
import React from 'react'
import slimPickens from './decorate'

function classNames(map) {
  return Object.keys(map).reduce((classes, c) => {
    if (map[c]) {
      return classes.concat(c)
    }

    return classes
  }, []).join(' ')
}

function renderRow(onPick, selected) {
  const renderDate = (date, i) => (
    <td
      key={i}
      className={classNames({
        date,
        selected: date && selected && date.getTime() === selected.getTime()
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
  selected = new Date(new Date().setHours(0, 0, 0, 0)),
  month,
  year,
  previousMonth,
  nextMonth,
  rows,
  onPick = () => {}
}) {
  const row = renderRow(onPick, selected)

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
          {rows.map(row)}
        </tbody>
      </table>
    </div>
  )
}

export default slimPickens(SlimPickens)
```

#### Inheritance

You can also inherit from the `SlimProto` component. Doing this gives you the same stuff as the
decorator does, but not as component props:

Name | Path | Description
---|:---
month | this.state.month | Calendar month (1-12)
year | this.state.year | Calendar year (YYYY)
previousMonth | this.previousMonth() | Function to go to the previous month
nextMonth | this.nextMonth() | Function to go to the next month
rows | this.rows() | Contains the data to fill each cell in the calendar for the current month and year
