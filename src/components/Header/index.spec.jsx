import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components';

describe('@render', () => {
    it('should render as expected', () => {
      const component = shallow(<Header title="Hello World"></Header>);

      expect(component).toMatchSnapshot();
    });
})