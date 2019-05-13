import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('matches color snapshot', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  });
});
