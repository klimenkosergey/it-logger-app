import React from 'react';
import { shallow } from 'enzyme';

import { SearchBar } from '../../../components/layout/SearchBar';

let searchLogs, wrapper;

beforeEach(() => {
  searchLogs = jest.fn();
  wrapper = shallow(<SearchBar searchLogs={searchLogs} />);
});

it('should render SearchBar correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onSearch', () => {
  const event = {
    target: {
      value: 'Test search query'
    }
  };
  wrapper.find('#search').simulate('change', event);
  expect(searchLogs).toHaveBeenCalledWith(event.target.value);
});
