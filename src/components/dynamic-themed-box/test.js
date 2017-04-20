import React from 'react';
import { describe } from 'ava-spec';
import { shallow as enzymeShallow } from 'enzyme';
import decorateShallow from '../../decorate-shallow';
import Alert from './';

const shallow = decorateShallow(enzymeShallow);

describe('<Alert />', it => {
  it('should render <span> as container', t => {
    const wrapper = shallow(<Alert />);
    const actual = wrapper.type();
    const expected = 'div';
    t.is(actual, expected);
  });

  it('should have the class alert', t => {
    const wrapper= shallow(<Alert />);
    const { classes } = wrapper;
    const actual = wrapper.hasClass(classes.alert);
    t.true(actual);
  });

  it('should render children', t => {
    const child = 'child';
    const wrapper = shallow(<Alert>{ child }</Alert>);
    const actual = wrapper.contains(child);
    t.true(actual);
  });
});
