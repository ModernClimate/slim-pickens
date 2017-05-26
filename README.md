[![npm](https://img.shields.io/npm/v/@ackmann-dickenson/slim-pickens.svg?style=plastic)](https://www.npmjs.com/package/@ackmann-dickenson/slim-pickens)

# slim-pickens

A lightweight date picker utility for React. Use our components or easily roll your own. Read on.

## Demo

http://outrageous-show.surge.sh/

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
    selected: '4/20/2016'
  }

  select = selected => this.setState({ selected })

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SlimPickens onPick={this.select} value={this.state.selected} />
      </div>
    );
  }
}

export default App;
```

The `SlimPickens` component accepts the following props:

Property Name | Type | Description
---|:---:|:---
value | String &#124; Date | The initially selected date. Can be a date object or a parsable date string.
onPick | Function(date) | Called with the chosen date when selected.

### Custom Components

If you don't like ours, build your own! You can use decorators or inheritance, take your pickens!

#### Decorators

Just decorate it with the `slimPickens` decorator and
it will inject all the properties you need:

Property Name | Type | Description
---|:---|:---
month | Integer | Calendar month (1-12)
year | Integer | Calendar year (YYYY)
previousMonth | Function | Decrement the calendar month
nextMonth | Function | Increment the calendar month
rows | Array&lt;Columns&gt; | Row & column data containing date objects to populate the cells of the calendar
selected | Date | The currently selected date

```javascript
export function MyCalendarComponent({ month, year, previousMonth, nextMonth, rows, selected }) {
  return (
    <table>
      ...
    </table>
  )
}

export default slimPickens(MyCalendarComponent)
```

In fact, the `SlimPickens` premade component is written with this decorator. We invite you to [look at the
source](https://github.com/ackmann-dickenson/slim-pickens/blob/master/src/SlimPickens.jsx) for inspiration!

#### Inheritance

You can also inherit from the `SlimProto` component. This offers essentially the same interface as the decorator,
with some minor differences:

1. `month` and `year` will be members of `this.state`
2. `previousMonth` and `nextMonth`, `rows`, and `selected` will all be component methods
