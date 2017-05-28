// @flow

import React, { Element } from 'react';
import SlimContainer from './SlimContainer';

const today = new Date();
today.setHours(0, 0, 0, 0);

const defaultProps = {
  selected: today,
  month: today.getMonth() + 1,
  year: today.getFullYear(),
  previousMonth: () => {},
  nextMonth: () => {},
  previousYear: () => {},
  nextYear: () => {},
  rows: []
};

type InstanceProps = {
  selected: Date,
  month: number,
  year: number,
  previousMonth: () => void,
  nextMonth: () => void,
  previousYear: () => void,
  nextYear: () => void,
  rows: Array<{ columns: Array<Date> }>
};

type InputProps = { value: string };

type FunctionComponent<A> = (props: A) => Element<*>;

type ClassComponent<D, A, S> = Class<React.Component<D, A, S>>;

type Component<A> = FunctionComponent<A> | ClassComponent<*, A, *>;

export default function slim<T: *>(Base: Component<T & InstanceProps>) {
  return ({ value, ...rest }: T & InputProps) => (
    <SlimContainer value={value}>
      <Base {...defaultProps} {...rest} />
    </SlimContainer>
  );
}
