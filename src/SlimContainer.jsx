// @flow

import React from 'react';
import SlimProto from './SlimProto';

type Props = { children: React.Element<*> };

export default class SlimContainer extends SlimProto<Props> {
  render(): React.Element<*> {
    return React.cloneElement(this.props.children, {
      ...this.state,
      rows: this.rows(),
      selected: this.selected(),
      previousMonth: this.previousMonth,
      nextMonth: this.nextMonth,
      previousYear: this.previousYear,
      nextYear: this.nextYear
    });
  }
}
