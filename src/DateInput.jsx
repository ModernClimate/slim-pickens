// @flow

import React, { Component } from 'react';
import slimPickens from './decorate';
import node from './lib/node';
import { SlimPickens } from './SlimPickens';

export class DateInput extends Component {
  static defaultProps = {
    format: (d: Date): string => d.toLocaleDateString()
  };

  state = {
    open: false
  };

  props: {
    selected: Date,
    month: number,
    year: number,
    previousMonth: () => void,
    nextMonth: () => void,
    previousYear: () => void,
    nextYear: () => void,
    rows: Array<{ columns: Array<Date> }>,
    onPick: (Date) => void,
    format: (Date) => string
  };

  slim: HTMLDivElement;

  open = () => {
    document.addEventListener('keydown', this.keydown);
    document.addEventListener('click', this.clickAway);
    this.setState({ open: true });
  };

  close = () => {
    document.removeEventListener('keydown', this.keydown);
    document.removeEventListener('click', this.clickAway);
    this.setState({ open: false });
  };

  keydown = (e: KeyboardEvent) => {
    if (e.which === 27) {
      this.close();
    }
  };

  clickAway = (e: MouseEvent) => {
    if (!node(this.slim).contains(e.target)) {
      this.close();
    }
  };

  picker() {
    const { format: _, onPick, ...rest } = this.props;

    const pick = (date: Date) => {
      onPick(date);
      this.close();
    };

    return this.state.open && <SlimPickens onPick={pick} {...rest} />;
  }

  render() {
    const { selected, format } = this.props;

    return (
      <div className="date-input">
        <input
          value={format(selected)}
          onChange={() => {}}
          disabled={this.state.open}
          onClick={this.open}
          onFocus={this.open}
        />
        <div
          ref={(slim: HTMLDivElement) => {
            this.slim = slim;
          }}
        >
          {this.picker()}
        </div>
      </div>
    );
  }
}

export default slimPickens(DateInput);
