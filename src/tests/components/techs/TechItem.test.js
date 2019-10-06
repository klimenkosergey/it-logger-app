import React from 'react';
import { shallow } from 'enzyme';

import techs from '../../fixtures/techs';
import TechItem from '../../../components/techs/TechItem';

let wrapper, onEditSpy, onDeleteSpy;

beforeEach(() => {
  onEditSpy = jest.fn();
  onDeleteSpy = jest.fn();
  wrapper = shallow(
    <TechItem tech={techs[0]} onEdit={onEditSpy} onDelete={onDeleteSpy} />
  );
});

it('should render TechItem correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onEdit', () => {
  wrapper.find('.blue-text').simulate('click');
  expect(onEditSpy).toHaveBeenCalled();
});

it('should handle onDelete', () => {
  wrapper.find('.tech-delete').simulate('click', { preventDefault: jest.fn() });
  expect(onDeleteSpy).toHaveBeenCalled();
});
