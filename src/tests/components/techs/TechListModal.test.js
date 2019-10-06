import React from 'react';
import { shallow, mount } from 'enzyme';

import techs from '../../fixtures/techs';
import { TechListModal } from '../../../components/techs/TechListModal';

let wrapper, getTechsSpy, deleteTechSpy;

beforeEach(() => {
  getTechsSpy = jest.fn();
  deleteTechSpy = jest.fn();
  wrapper = shallow(
    <TechListModal
      techs={techs}
      loading={false}
      getTechs={getTechsSpy}
      deleteTech={deleteTechSpy}
    />
  );
});

it('should render TechListModal correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render Loading info if loading', () => {
  wrapper = shallow(
    <TechListModal
      techs={techs}
      loading={true}
      getTechs={getTechsSpy}
      deleteTech={deleteTechSpy}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should handle getTechs when mounted', () => {
  wrapper = mount(
    <TechListModal
      techs={techs}
      loading={false}
      getTechs={getTechsSpy}
      deleteTech={deleteTechSpy}
    />
  );
  expect(getTechsSpy).toHaveBeenCalled();
});
