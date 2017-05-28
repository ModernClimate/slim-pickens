[![npm](https://img.shields.io/npm/v/@ackmann-dickenson/slim-pickens.svg?style=plastic)](https://www.npmjs.com/package/@ackmann-dickenson/slim-pickens)
[![Travis](https://img.shields.io/travis/ackmann-dickenson/slim-pickens.svg?style=plastic)](https://github.com/ackmann-dickenson/slim-pickens)

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

We currently feature a simple calendar component as well as a date input, described below.

#### SlimPickens

This is a regular calendar control.

```javascript
import React, { Component } from 'react';
import { SlimPickens } from '@ackmann-dickenson/slim-pickens';

export default class App extends Component {
  state = {
    selected: '4/20/2016'
  }

  select = selected => this.setState({ selected })

  render() {
    return (
      <SlimPickens onPick={this.select} value={this.state.selected} />
    );
  }
}
```

The `SlimPickens` component accepts the following props:

Property Name | Type | Description
---|:---:|:---
value | String &#124; Date | The initially selected date. Can be a date object or a parsable date string.
onPick | Function(Date) | Called with the chosen date when selected.

#### DateInput

An input that opens a calendar control when clicked. Selecting a date closes the calendar and displays the
selected date value in the input.

```javascript
import React, { Component } from 'react';
import { DateInput } from '@ackmann-dickenson/slim-pickens';

export default class App extends Component {
  state = {
    selected: '4/20/2016'
  }

  select = selected => this.setState({ selected })

  render() {
    return (
      <DateInput onPick={this.select} value={this.state.selected} />
    );
  }
}
```

The `DateInput` component accepts the same props as `SlimPickens`, as well as an optional `format` prop.

Property Name | Type | Description
---|:---:|:---
value | String &#124; Date | The initially selected date. Can be a date object or a parsable date string.
onPick | Function(Date) | Called with the chosen date when selected.
format | Function(Date) | Determines how to display the date in the input. Defaults to ` date => date.toLocaleString()`.

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
previousYear | Function | Decrement the calendar year
nextYear | Function | Increment the calendar year
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
2. `previousMonth` and `nextMonth`, `previousYear`, `nextYear`, `rows`, and `selected` will all be component methods
