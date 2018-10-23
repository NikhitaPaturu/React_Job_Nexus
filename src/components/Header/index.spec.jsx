import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header } from '../../components';

const history = {
  push: jest.fn()
}

const logoutHandler = jest.fn()

describe('@render', () => {
    it('should render as expected if not authorized', () => {
      const component = shallow(<Header authorized={false} history={history}></Header>);

      expect(component).toMatchSnapshot();
    });

    it('should render as expected if authorized', () => {
      const component = shallow(<Header authorized={true} history={history}></Header>);

      expect(component).toMatchSnapshot();
    });
})

describe('@click', () => {
  it('simulate register click on register', () => {
    const component = mount(<Header authorized={false} history={history}></Header>);
    component.find('a').at(2).simulate('click');
    
  });

  it('simulate register click on login', () => {
    const component = mount(<Header authorized={false} history={history}></Header>);
    component.find('a').at(3).simulate('click');
  });

  it('simulate register click on logout', () => {
    const component = mount(<Header authorized={true} history={history} logoutHandler={logoutHandler}></Header>);
    component.find('a').at(3).simulate('click');
    
  });
})