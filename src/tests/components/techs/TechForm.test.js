import React from 'react';
import { shallow } from 'enzyme';

import techs from '../../fixtures/techs';
import TechForm from '../../../components/techs/TechForm';

let wrapper, onSubmitSpy;

beforeEach(() => {
  onSubmitSpy = jest.fn();
  wrapper = shallow(<TechForm onSubmit={onSubmitSpy} />);
});

it('should render TechForm correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render TechForm with provided tech', () => {
  wrapper = shallow(<TechForm onSubmit={onSubmitSpy} {...techs[0]} />);
  expect(wrapper).toMatchSnapshot();
});

it('should handle onSubmit', () => {
  wrapper.find('.btn').simulate('click', { preventDefault: jest.fn() });
  expect(onSubmitSpy).toHaveBeenCalled();
});

it('should change firstName on input change', () => {
  const firstName = 'Bruce';
  wrapper
    .find('input[name="firstName"]')
    .simulate('change', { target: { value: firstName } });
  expect(wrapper.find('input[name="firstName"]').prop('value')).toBe(firstName);
});

it('should change lastName on input change', () => {
  const lastName = 'Banner';
  wrapper
    .find('input[name="lastName"]')
    .simulate('change', { target: { value: lastName } });
  expect(wrapper.find('input[name="lastName"]').prop('value')).toBe(lastName);
});
