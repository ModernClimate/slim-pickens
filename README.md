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
value | string | A parsable date string representing the initially selected date.
onPick | (date: Date) => void | Called with the chosen date when selected.

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
value | string | A parsable date string representing the initially selected date.
onPick | (date: Date) => void | Called with the chosen date when selected.
format | (date: Date) => string | Determines how to display the date in the input. Defaults to ` date => date.toLocaleString()`.

### Custom Components

If you don't like ours, build your own! You can use decorators or inheritance, take your pickens!

#### Decorators

Just decorate it with the `slimPickens` decorator and
it will inject all the properties you need:

Property Name | Type | Description
---|:---|:---
month | number | Calendar month (1-12)
year | number | Calendar year (YYYY)
previousMonth | () => void | Decrement the calendar month
nextMonth | () => void | Increment the calendar month
previousYear | () => void | Decrement the calendar year
nextYear | () => void | Increment the calendar year
rows | Array&lt;{ columns: Array&lt;Date&gt; }&gt; | Row & column data containing date objects to populate the cells of the calendar
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

## Contribution

We are happy to accept pull requests. If you want to make one, here are some things you'll want to know.

### Running the example project

You can test your changes with the example project by using linking. Starting at the project root directory:

```
yarn run compile
yarn link
cd example
yarn install
yarn link @ackmann-dickenson/slim-pickens
yarn start
```

### Type checking with flow

All library files are type checked using flow. If you are creating a new file, add this to the top:

```
// @flow
```

This makes sure that type checking will run on your file. Pull requests with files that aren't type checked
will not be accepted. Type checking can be performed with

```
yarn run flow
```

This check will also be performed by Travis CI.

### Testing

The project is tested with `mocha`, `expect`, and `enzyme`. All pull requests should come with test coverage.
Tests can be run locally with

```
yarn run spec
```

### Linting

This project uses eslint to enforce some stylistic rules. The configuration is an extension of airbnb & flow
recommended settings with some overrides. Perform lint checks locally with:

```
yarn run lint
```

### All Checks / Travis CI

You can run all of the above checks by executing

```
yarn test
```

This performs checks as follows:

1. `yarn run flow`
2. `yarn run lint`
3. `yarn run spec`

This task is executed by Travis CI, so failure to pass any of these checks will cause a build failure.
