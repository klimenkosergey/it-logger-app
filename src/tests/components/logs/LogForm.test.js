import React from 'react';
import { shallow, mount } from 'enzyme';

import LogForm from '../../../components/logs/LogForm';

let wrapper, onSubmit, log;

beforeEach(() => {
  log = {
    id: 1,
    message: 'Fixed hard drive',
    tech: 'Tony Stark'
  };
  onSubmit = jest.fn();
  wrapper = shallow(<LogForm onSubmit={onSubmit} {...log} />);
});

it('should render LogForm correctly', () => {
  wrapper = shallow(<LogForm onSubmit={onSubmit} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render LogForm correctly with provided log', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onSubmit', () => {
  wrapper.find('.btn').simulate('click', { preventDefault: jest.fn() });
  expect(onSubmit).toHaveBeenCalled();
});

it('should change message on input change', () => {
  wrapper
    .find('input[name="message"]')
    .simulate('change', { target: { value: 'Server room' } });
  expect(wrapper.find('input[name="message"]').prop('value')).toBe(
    'Server room'
  );
});

it('should change tech on input change', () => {
  wrapper
    .find('select[name="tech"]')
    .simulate('change', { target: { value: 'Bruce Banner' } });
  expect(wrapper.find('select[name="tech"]').prop('value')).toBe(
    'Bruce Banner'
  );
});

it('should change attention on input change', () => {
  wrapper.find('input[type="checkbox"]').simulate('change');
  expect(wrapper.find('input[type="checkbox"]').prop('value')).toBe(true);
});
