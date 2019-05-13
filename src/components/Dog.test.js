import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog component', () => {
  it('matches dog snapshot', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
