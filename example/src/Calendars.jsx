import React, { Component } from 'react';
import { SlimPickens, DateInput } from '@ackmann-dickenson/slim-pickens';

export default class Calendars extends Component {
  state = {
    selected: '4/20/2017'
  }

  select = selected => this.setState({ selected })

  render() {
    return (
      <center>
        <h1>A plain old calendar</h1>
        <SlimPickens onPick={this.select} value={this.state.selected} />
        <h1>A date input</h1>
        <DateInput onPick={this.select} value={this.state.selected} />
      </center>
    )
  }
}
