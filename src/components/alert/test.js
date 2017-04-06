import React from 'react';
import { describe } from 'ava-spec';
import { shallow } from 'enzyme';
import { Alert } from './';

describe('<Alert />', it => {
  it('should render <span> as container', t => {
    const wrapper = shallow(<Alert classes={{}} />);
    const actual = wrapper.type();
    const expected = 'div';
    t.is(actual, expected);
  });

  it('should have the class badge', t => {
    const classes = { alert: 'alert' };
    const wrapper = shallow(<Alert classes={classes} />);
    const actual = wrapper.hasClass(classes.alert);
    t.true(actual);
  });

  it('should render children', t => {
    const child = 'child';
    const wrapper = shallow(<Alert classes={{}}>{ child }</Alert>);
    const actual = wrapper.contains(child);
    t.true(actual);
  });
});
