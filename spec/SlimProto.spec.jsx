import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import SlimProto from '../src/SlimProto';
import './specHelper';

describe('<SlimProto />', () => {
  context('given an initial date value', () => {
    const wrapper = shallow(
      <SlimProto onPick={() => {}} value="4/20/2016" />,
    );

    it('takes the month from the initial value', () => {
      expect(wrapper.state().month).toEqual(4);
    });

    it('takes the year from the initial value', () => {
      expect(wrapper.state().year).toEqual(2016);
    });
  });

  describe('previousMonth()', () => {
    context('when the current month is January', () => {
      const wrapper = shallow(
        <SlimProto onPick={() => {}} value="1/20/2016" />,
      );

      wrapper.instance().previousMonth();

      it('goes to the end of last year', () => {
        const { month, year } = wrapper.state();
        expect([month, year]).toEqual([12, 2015]);
      });
    });

    context('when the current month is after January', () => {
      const wrapper = shallow(
        <SlimProto onPick={() => {}} value="2/20/2016" />,
      );

      wrapper.instance().previousMonth();

      it('goes to the previous month in the year', () => {
        const { month, year } = wrapper.state();
        expect([month, year]).toEqual([1, 2016]);
      });
    });
  });

  describe('nextMonth()', () => {
    context('when the current month is December', () => {
      const wrapper = shallow(
        <SlimProto onPick={() => {}} value="12/20/2016" />,
      );

      wrapper.instance().nextMonth();

      it('goes to the beginning of next year', () => {
        const { month, year } = wrapper.state();
        expect([month, year]).toEqual([1, 2017]);
      });
    });

    context('when the current month is before December', () => {
      const wrapper = shallow(
        <SlimProto onPick={() => {}} value="2/20/2016" />,
      );

      wrapper.instance().nextMonth();

      it('goes to the next month in the year', () => {
        const { month, year } = wrapper.state();
        expect([month, year]).toEqual([3, 2016]);
      });
    });
  });

  describe('previousYear()', () => {
    const wrapper = shallow(
      <SlimProto onPick={() => {}} value="2/20/2016" />,
    );

    wrapper.instance().previousYear();

    it('goes to the same month in the previous year', () => {
      const { month, year } = wrapper.state();
      expect([month, year]).toEqual([2, 2015]);
    });
  });

  describe('nextYear()', () => {
    const wrapper = shallow(
      <SlimProto onPick={() => {}} value="2/20/2016" />,
    );

    wrapper.instance().nextYear();

    it('goes to the same month in the next year', () => {
      const { month, year } = wrapper.state();
      expect([month, year]).toEqual([2, 2017]);
    });
  });
});
